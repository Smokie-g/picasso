import React, { LegacyRef, CSSProperties, FC } from 'react'
import { styled } from 'styled-components'

interface IProps {
  rowItemRef: LegacyRef<HTMLDivElement>
  description: string
  postTitle: string
  rowId: number
  style: CSSProperties
  onClick(): void
}

const ItemWrapper = styled.div`
  box-shadow: 1px 1px 10px #e0e4ef;
  border-radius: 12px;
  text-align: left;
  display: flex;
  align-items: center;
`
const Content = styled.div`
  max-width: 95%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`
const TextContainer = styled.div`
  flex-direction: column;
`
const Title = styled.h4``
const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ButtonWrapper = styled.div`
  display: flex;
`
const Button = styled.button`
  box-sizing: border-box;
  align-items: center;
  background-color: white;
  border: 1px solid #3a76e6;
  border-radius: 4px;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #f8fafb;
  }
`

export const RowItem: FC<IProps> = ({
  rowItemRef,
  description,
  postTitle,
  rowId,
  style,
  onClick,
}) => (
  <ItemWrapper style={style} ref={rowItemRef}>
    <Content>
      <TextContainer>
        <Title>{`${rowId}. ${postTitle}`}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <ButtonWrapper>
        <Button onClick={onClick}>
          Просмотр
        </Button>
      </ButtonWrapper>
    </Content>
  </ItemWrapper>
)
