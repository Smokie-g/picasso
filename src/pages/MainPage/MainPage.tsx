import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import 'react-virtualized/styles.css'
import { useGetPostsQuery } from '../../api'

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 16px;
  padding-bottom: 24px;
`
const Title = styled.h4`
  font-weight: 600;
  font-size: 20px;
  margin-left: 24px;
  color: black;

  @media screen and (max-width: 632px) {
    display: none;
  }
`
const TableWrapper = styled.div`
  background-color: white;
  padding: 32px 24px;
  border: 1px solid #f0f0f0;
  border-radius: 7px;
`
const Wrapper = styled.div``
const ItemWrapper = styled.div`
  box-shadow: 1px 1px 10px #e0e4ef;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Content = styled.div`
  padding: 21px 14px 0;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Text = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`
const Button = styled.button`
  box-sizing: border-box;
  align-items: center;
  background-color: white;
  border: 1px solid #3a76e6;
  border-radius: 4px;
  line-height: 16px;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`

export const MainPage: React.FC = () => {
  const navigate = useNavigate()

  const {
    data: posts = [],
    isError,
    isFetching,
    isLoading,
  } = useGetPostsQuery()

  if (isLoading || isFetching) {
    return <div>loading...</div>
  }

  if (isError) {
    return <div>При загрузке данных произошла ошибка</div>
  }

  return (
    <>
      <TitleContainer>
        <Title>Список элементов</Title>
      </TitleContainer>

      <TableWrapper>
        <Wrapper>
          {posts.map(post => (
            <ItemWrapper key={post.id}>
              <Content>
                <TextContainer>
                  <h4>{`${post.id}. ${post.title}`}</h4>
                  <Text>{post.body}</Text>
                </TextContainer>
                <ButtonWrapper>
                  <Button onClick={() => navigate(`details/${post.id}`)}>
                    Просмотр
                  </Button>
                </ButtonWrapper>
              </Content>
            </ItemWrapper>
          ))}
        </Wrapper>
      </TableWrapper>
    </>
  )
}
