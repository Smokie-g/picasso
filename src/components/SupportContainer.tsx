import React from 'react'
import { styled } from 'styled-components'

interface IProps {
  supportText: string
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
const SupportText = styled.p`
  font-size: 16px;
`

export const SupportContainer: React.FC<IProps> = ({ supportText }) => (
  <Container>
    <SupportText>{supportText}</SupportText>
  </Container>
)
