import React, { useContext } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import styles from './styles/SettingsDialog.module.scss'
import { CloudSnow, Thermometer } from 'phosphor-react'
import { SettingsContext } from '../../context/SettingsContext'

export default function SettingsDialog() {
  const { temperature, setTemperature, precipitation, setPrecipitation } =
    useContext(SettingsContext)

  return (
    <Dialog.Content className={styles.settingsModalWrapper}>
      <Dialog.Title>Configurações</Dialog.Title>
      <div className={styles.settingsButtonsWrapper}>
        <div>
          <header className={styles.settingHeader}>
            <Thermometer />
            <span>Temperatura</span>
          </header>
          <div className={styles.buttonsDiv}>
            <button
              className={
                temperature === 'celsius'
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onClick={() => setTemperature('celsius')}
            >
              Celsius
            </button>
            <button
              onClick={() => setTemperature('fahrenheit')}
              className={
                temperature === 'fahrenheit'
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
            >
              Fahrenheit
            </button>
          </div>
        </div>
        <div>
          <header className={styles.settingHeader}>
            <CloudSnow />
            <span>Precipitação</span>
          </header>
          <div className={styles.buttonsDiv}>
            <button
              className={
                precipitation === 'inches'
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onClick={() => setPrecipitation('inches')}
            >
              Inches
            </button>
            <button
              className={
                precipitation === 'milimeters'
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onClick={() => setPrecipitation('milimeters')}
            >
              Milímetros
            </button>
          </div>
        </div>
      </div>
    </Dialog.Content>
  )
}
