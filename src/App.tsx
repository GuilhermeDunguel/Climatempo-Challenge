import React from 'react'
import { APIDataContextProvider } from './context/APIDataContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import './styles/globals.scss'
import { Main } from './pages/Main'
import { SettingsContextProvider } from './context/SettingsContext'

function App() {
  return (
    <SettingsContextProvider>
      <APIDataContextProvider>
        <DefaultLayout>
          <Main />
        </DefaultLayout>
      </APIDataContextProvider>
    </SettingsContextProvider>
  )
}

export default App
