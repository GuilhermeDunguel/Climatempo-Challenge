import React from 'react'
import { InitialPage } from './components/InitialPage'
import { DefaultLayout } from './layouts/DefaultLayout'
import './styles/globals.scss'

function App() {
  const data = []

  return (
    <DefaultLayout>
      {data.length === 0 ? <InitialPage /> : 'cheio'}
    </DefaultLayout>
  )
}

export default App
