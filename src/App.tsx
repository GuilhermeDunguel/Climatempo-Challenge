import React from 'react'
import { APIDataContextProvider } from './context/APIDataContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import './styles/globals.scss'
import { Main } from './pages/Main'

function App() {
  return (
    <APIDataContextProvider>
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </APIDataContextProvider>
  )
}

export default App
