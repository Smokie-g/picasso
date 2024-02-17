import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Router } from './navigation'
import { store } from './redux'

export const App: React.FC = () => (
  <Suspense fallback={<></>}>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    </Provider>
  </Suspense>
)
