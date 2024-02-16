import React from 'react'
import { styled } from 'styled-components'

interface IProps {
  onClick(): void
}

const BackButtonContainer = styled.div`
  display: flex;
  cursor: pointer;
`
const ButtonContainer = styled.div`
  border: 1px solid #3a76e6;
  border-radius: 7px;
  margin-right: 8px;
  padding-left: 4px;
  padding-right: 4px;
  &:hover {
    background: #f8fafb;
  }
`
const BackButtonText = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
`

export const BackButton: React.FC<IProps> = ({ onClick }) => (
  <BackButtonContainer onClick={onClick}>
    <ButtonContainer>
      <BackButtonText>Назад</BackButtonText>
    </ButtonContainer>
  </BackButtonContainer>
)
