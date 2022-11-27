import React, { useContext } from 'react'
import { InitialPage } from './pages/InitialPage'
import { WeatherCard } from './pages/components/WeatherCard'
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
