import { CircleNotch } from 'phosphor-react'
import React from 'react'

import styles from './styles/LoadingPage.module.scss'

export function LoadingPage() {
  return (
    <main className={styles.loadingWrapper}>
      <CircleNotch size={64} weight={'bold'} />
      <span>Carregando...</span>
    </main>
  )
}
