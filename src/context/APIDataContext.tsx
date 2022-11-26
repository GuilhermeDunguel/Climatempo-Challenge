import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../utils/axios'

interface localeDataType {
  id: number
  name: string
  state: string
  latitude: number
  longitude: number
}

interface APIDataContextProps {
  locales: localeDataType[]
}

interface ContextProviderProps {
  children: ReactNode
}

export const APIDataContext = createContext({} as APIDataContextProps)

export function APIDataContextProvider({ children }: ContextProviderProps) {
  const [locales, setLocales] = useState([])

  const fetchApiData = useCallback(async () => {
    const locales = await api.get('data').then((data) => data.data)
    setLocales(locales)
  }, [locales])

  useEffect(() => {
    fetchApiData()
  }, [])

  return (
    <APIDataContext.Provider
      value={{
        locales,
      }}
    >
      {children}
    </APIDataContext.Provider>
  )
}
