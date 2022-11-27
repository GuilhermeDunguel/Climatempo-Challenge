import React, { useContext } from 'react'
import { APIDataContext } from '../../context/APIDataContext'
import { WeatherCard } from './WeatherCard'

import styles from '../styles/WeatherPage.module.scss'

export function WeatherPage() {
  const { weather } = useContext(APIDataContext)

  return (
    <>
      {weather.map((pageData) => {
        return (
          <main key={pageData.locale.id} className={styles.weatherPageWrapper}>
            <span>
              Previsões para{' '}
              <strong>
                {pageData.locale.name} - {pageData.locale.state}
              </strong>
            </span>
            {pageData.weather.map((weatherCard) => {
              return (
                <WeatherCard
                  key={weatherCard.date}
                  date={weatherCard.date}
                  rain={weatherCard.rain}
                  temperatures={weatherCard.temperature}
                  text={weatherCard.text}
                />
              )
            })}
          </main>
        )
      })}
    </>
  )
}
