import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import { Router } from './navigation'
import { store } from './redux'

export const App: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}
