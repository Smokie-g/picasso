import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const MainPage = lazy(() =>
  import('../pages/MainPage').then(({ MainPage }) => ({ default: MainPage })),
)
const DetailInfo = lazy(() =>
  import('../pages/DetailInfo').then(({ DetailInfo }) => ({
    default: DetailInfo,
  })),
)

export const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route element={<DetailInfo />} path='/details/:id' />
  </Routes>
)
