import React from 'react'

import styles from './styles/WellcomePage.module.scss'

export function WellcomePage() {
  return (
    <main className={styles.wellcomeWrapper}>
      <h1>Bem vindo!</h1>
      <p>Insira uma localização para continuar.</p>
    </main>
  )
}
