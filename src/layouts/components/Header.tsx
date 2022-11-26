import React, { useContext, useState } from 'react'
import styles from './styles/Header.module.scss'

import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import logoWhite from '../../assets/logo-white.png'
import { List, MagnifyingGlass, X } from 'phosphor-react'
import { APIDataContext } from '../../context/APIDataContext'

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const { locales } = useContext(APIDataContext)

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
            <Dialog.Content>
              <Dialog.Title>Configurações</Dialog.Title>
              <Dialog.Description></Dialog.Description>
            </Dialog.Content>
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
                    onClick={() => console.log(locale.id)}
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
