import React from 'react'
import { styled } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../api'
import { Header, BackButton, SupportContainer } from '../../components'
import { DetailInfoCard } from './components'

const DetailInfoContainer = styled.div`
  display: flex;
  padding-left: 24px;
`
const HeaderTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
`

export const DetailInfo: React.FC = () => {
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const {
    data: post,
    isError,
    isFetching,
    isLoading,
  } = useGetPostQuery(id || '')

  if (isLoading || isFetching) {
    return (
      <SupportContainer supportText='Loading...' />
    )
  }

  if (isError) {
    return (
      <SupportContainer supportText='При загрузке данных произошла ошибка' />
    )
  }

  return (
    <DetailInfoContainer>
      <Header>
        <BackButton onClick={() => navigate('/')} />
        <HeaderTitle>Детальная информация</HeaderTitle>
      </Header>

      <DetailInfoCard
        description={post?.body || ''}
        postTitle={post?.title || ''}
        userId={post?.userId || 0}
      />
    </DetailInfoContainer>
  )
}
