import React, { FC, ReactNode } from 'react'
import { styled } from 'styled-components'
import { HEADER_HEIGHT } from '../utils'

interface IHeader {
  children: ReactNode
}

const HeaderWrapper = styled.div`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 2;
`

export const Header: FC<IHeader> = ({ children }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
)
