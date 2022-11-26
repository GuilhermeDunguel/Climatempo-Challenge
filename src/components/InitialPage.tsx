import React from 'react'

import styles from './styles/InitialPage.module.scss'

export function InitialPage() {
  return (
    <div className={styles.wellcomeWrapper}>
      <h1>Bem vindo!</h1>
      <p>Insira uma localização para continuar.</p>
    </div>
  )
}
