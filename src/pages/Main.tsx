import { CircleNotch } from 'phosphor-react'
import React, { useContext } from 'react'
import { APIDataContext } from '../context/APIDataContext'
import { WeatherCard } from './components/WeatherCard'

import styles from './styles/Main.module.scss'

export function Main() {
  const { weather, localeId } = useContext(APIDataContext)

  if (weather.length > 0) {
    return (
      <main className={styles.weatherPageWrapper}>
        {weather.map((pageData) => {
          return (
            <>
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
                    temperature={weatherCard.temperature}
                    text={weatherCard.text}
                  />
                )
              })}
            </>
          )
        })}
      </main>
    )
  } else if (localeId === 0) {
    return (
      <main className={styles.wellcomeWrapper}>
        <h1>Bem vindo!</h1>
        <p>Insira uma localização para continuar.</p>
      </main>
    )
  } else if (weather.length === 0) {
    return (
      <main className={styles.loadingWrapper}>
        <CircleNotch size={64} weight={'bold'} />
        <span>Carregando...</span>
      </main>
    )
  }
}
