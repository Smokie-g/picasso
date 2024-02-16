import React from 'react'
import { styled } from 'styled-components'
import { HEADER_HEIGHT } from '../../../../utils'
import { getUser } from '../../utils'

interface IProps {
  description: string
  postTitle: string
  userId: number
}

const Wrapper = styled.div`
  margin-top: ${HEADER_HEIGHT}px;
  box-shadow: 2px 2px 6px rgba(24, 35, 61, 0.08);
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
`
const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Info = styled.div`
  max-width: 300px;
`
const BaseText = styled.p`
  font-size: 16px;
`
const Role = styled(BaseText)`
  font-size: 16px;
  font-weight: 600;
`

export const DetailInfoCard: React.FC<IProps> = ({
  description,
  postTitle,
  userId,
}) => (
  <Wrapper>
    <DetailContainer>
      <Info>
        <Role>{`Пользователь: ${getUser(userId || 0)}`}</Role>
        <BaseText>{postTitle}</BaseText>
        <BaseText>{description}</BaseText>
      </Info>
    </DetailContainer>
  </Wrapper>
)
