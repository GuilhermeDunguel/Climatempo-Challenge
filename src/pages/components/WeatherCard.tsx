import { ArrowDown, ArrowUp, CaretDown, CaretUp, Drop } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'

import styles from '../styles/WeatherCard.module.scss'

interface WeatherCardProps {
  date: string
  rain: {
    probability: number
    precipitation: number
  }
  temperatures: {
    min: number
    max: number
  }
  text: string
}

export function WeatherCard({
  date,
  rain,
  temperatures,
  text,
}: WeatherCardProps) {
  const [openCardState, setOpenCardState] = useState(false)

  const { temperature, precipitation } = useContext(SettingsContext)

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
              <span>
                {temperature === 'celsius'
                  ? `${temperatures.max}°C`
                  : `${Math.round(temperatures.max * 1.8 + 32)}°F`}
              </span>
            </div>
            <div className={styles.temperatureDownDiv}>
              <ArrowDown size={18} />
              <span>
                {temperature === 'celsius'
                  ? `${temperatures.min}°C`
                  : `${Math.round(temperatures.min * 1.8 + 32)}°F`}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rainWrapper}>
          <span className={styles.rainTitle}>CHUVA</span>
          <div className={styles.rainDataDiv}>
            <Drop size={18} weight={'fill'} />
            <span>
              {precipitation === 'milimeters'
                ? `${rain.precipitation}mm`
                : `${(rain.precipitation / 25.4).toFixed(2)}in`}{' '}
              - {rain.probability}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
