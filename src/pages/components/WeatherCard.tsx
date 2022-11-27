import { ArrowDown, ArrowUp, CaretDown, CaretUp, Drop } from 'phosphor-react'
import React, { useState } from 'react'

import styles from '../styles/WeatherCard.module.scss'

interface WeatherCardProps {
  date: string
  rain: {
    probability: number
    precipitation: number
  }
  temperature: {
    min: number
    max: number
  }
  text: string
}

export function WeatherCard({
  date,
  rain,
  temperature,
  text,
}: WeatherCardProps) {
  const [openCardState, setOpenCardState] = useState(false)

  return (
    <div className={styles.weatherCardWrapper}>
      <header className={styles.weatherCardHeader}>
        <span>{date}</span>
        <button
          className={styles.openCardButton}
          onClick={() => setOpenCardState(!openCardState)}
        >
          {openCardState ? <CaretUp size={20} /> : <CaretDown size={20} />}
        </button>
      </header>
      <div
        className={
          openCardState
            ? styles.weatherCardContentOpen
            : styles.weatherCardContentClosed
        }
      >
        <p>{text}</p>
        <div className={styles.temperatureWrapper}>
          <span className={styles.temperatureTitle}>TEMPERATURA</span>
          <div className={styles.temperatureDataDiv}>
            <div className={styles.temperatureUpDiv}>
              <ArrowUp size={18} />
              <span>{temperature.max}°c</span>
            </div>
            <div className={styles.temperatureDownDiv}>
              <ArrowDown size={18} />
              <span>{temperature.min}°c</span>
            </div>
          </div>
        </div>
        <div className={styles.rainWrapper}>
          <span className={styles.rainTitle}>CHUVA</span>
          <div className={styles.rainDataDiv}>
            <Drop size={18} weight={'fill'} />
            <span>
              {rain.precipitation}mm - {rain.probability}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
