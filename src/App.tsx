import React from 'react'
import { InitialPage } from './components/InitialPage'
import { APIDataContextProvider } from './context/APIDataContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import './styles/globals.scss'

function App() {
  const data = []

  return (
    <APIDataContextProvider>
      <DefaultLayout>
        {data.length === 0 ? <InitialPage /> : 'cheio'}
      </DefaultLayout>
    </APIDataContextProvider>
  )
}

export default App
