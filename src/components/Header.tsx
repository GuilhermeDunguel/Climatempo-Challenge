import React, { useContext, useState } from 'react'
import styles from './styles/Header.module.scss'

import * as Dialog from '@radix-ui/react-dialog'

import logoWhite from '../assets/logo-white.png'
import { List, MagnifyingGlass, X } from 'phosphor-react'
import { APIDataContext } from '../context/APIDataContext'
import SettingsDialog from './SettingsDialog'

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')

  const { locales, setLocaleId } = useContext(APIDataContext)

  return (
    <header>
      <div className={styles.headerWrapper}>
        <img src={logoWhite} alt="Logo do Climatempo versão branca" />
        <Dialog.Root onOpenChange={() => setModalOpen(!modalOpen)}>
          <Dialog.Trigger className={styles.settingsMenu}>
            {modalOpen ? <X size={26} /> : <List size={26} />}
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <SettingsDialog />
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBarInputDiv}>
          <label htmlFor="searchBarInput">
            <MagnifyingGlass className={styles.searchInputIcon} size={16} />
          </label>
          <input
            id="searchBarInput"
            className={styles.searchInput}
            value={searchInputValue}
            onChange={(event) => setSearchInputValue(event.target.value)}
            type="text"
            placeholder="Buscar por localização"
          />
          <div className={styles.autoCompleteWrapper}>
            {locales
              .filter((locale) => {
                const searchTerm = searchInputValue.toLowerCase()
                const cityName = locale.name.toLowerCase()
                const stateName = locale.state.toLowerCase()

                return (
                  (searchTerm && cityName.startsWith(searchTerm)) ||
                  (searchTerm && stateName.startsWith(searchTerm))
                )
              })
              .map((locale) => {
                return (
                  <button
                    key={locale.id}
                    onClick={() => setLocaleId(locale.id)}
                  >
                    {locale.name}
                  </button>
                )
              })}
          </div>
        </div>
      </div>
    </header>
  )
}
