import React, { useContext } from 'react'
import { APIDataContext } from '../context/APIDataContext'
import { LoadingPage } from './components/LoadingPage'
import { WeatherPage } from './components/WeatherPage'
import { WellcomePage } from './components/WellcomePage'

export function Main() {
  const { weather, localeId } = useContext(APIDataContext)

  return weather.length > 0 ? (
    <WeatherPage />
  ) : localeId === 0 ? (
    <WellcomePage />
  ) : (
    <LoadingPage />
  )
}
