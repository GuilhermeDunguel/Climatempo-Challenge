import React, { useContext } from 'react'
import { APIDataContext } from '../context/APIDataContext'
import { LoadingPage } from './LoadingPage'
import { WeatherPage } from './WeatherPage'
import { WellcomePage } from './WellcomePage'

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
