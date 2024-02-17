import React, { LegacyRef } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  ListRowProps,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'
import { useGetPostsQuery } from '../../api'
import { Header, SupportContainer } from '../../components'
import { RowItem, ListItem } from './components'

const MainLayout = styled.div`
  overflow: hidden;
  max-height: 100vh;
`
const Title = styled.h4`
  font-weight: 600;
  font-size: 20px;
  margin-left: 24px;
`

export const MainPage: React.FC = () => {
  const navigate = useNavigate()

  const {
    data: posts = [],
    isError,
    isFetching,
    isLoading,
  } = useGetPostsQuery()

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  })

  if (isLoading || isFetching) {
    return <SupportContainer supportText='Loading...' />
  }

  if (isError) {
    return (
      <SupportContainer supportText='При загрузке данных произошла ошибка' />
    )
  }

  const renderRow: React.FC<ListRowProps> = ({ index, key, style, parent }) => (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      {({ registerChild }) => (
        <RowItem
          rowItemRef={registerChild as LegacyRef<HTMLDivElement>}
          description={posts[index].body}
          rowId={posts[index].id}
          style={style}
          postTitle={posts[index].title}
          onClick={() => navigate(`details/${posts[index].id}`)}
        />
      )}
    </CellMeasurer>
  )

  return (
    <MainLayout>
      <Header>
        <Title>Список элементов</Title>
      </Header>

      <ListItem
        cache={cache}
        postsLength={posts.length}
        renderRow={renderRow}
        rowHeight={cache.rowHeight}
      />
    </MainLayout>
  )
}
