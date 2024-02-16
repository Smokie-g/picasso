import React from 'react'
import { styled } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../api'

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 24px;
`
const Title = styled.h4`
  font-weight: 600;
  font-size: 20px;
  margin-left: 24px;

  @media screen and (max-width: 632px) {
    display: none;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 80px;
  margin-left: 24px;
  padding-top: 16px;
  cursor: pointer;
`
const ButtonContainer = styled.div`
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  padding-left: 4px;
  padding-right: 4px;
`
const BackButtonText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`
const Wrapper = styled.div`
  box-shadow: inset 0px 1px 1px rgba(47, 46, 65, 0.2);
  padding: 8px 24px;
`
const DetailContainer = styled.div`
  width: 97%;
  display: flex;
  font-weight: 500;

  justify-content: space-between;
  align-items: center;
`
const Info = styled.div`
  max-width: 284px;
`

const Name = styled.p`
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 2px;
`

const Role = styled.p`
  font-size: 14px;
  padding-bottom: 2px;
`

const Email = styled.p`
  font-size: 14px;
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
    return <div>loading...</div>
  }

  if (isError) {
    return <div>При загрузке данных произошла ошибка</div>
  }

  return (
    <>
      <Container onClick={() => navigate('/')}>
        <ButtonContainer>
          <BackButtonText>Назад</BackButtonText>
        </ButtonContainer>
      </Container>
      <TitleContainer>
        <Title>Детальная информация</Title>
      </TitleContainer>

      <Wrapper>
        <DetailContainer>
          <Info>
            <Name>{post?.title}</Name>
            <Role>{post?.userId}</Role>
            <Email>{post?.body}</Email>
          </Info>
        </DetailContainer>
      </Wrapper>
    </>
  )
}
