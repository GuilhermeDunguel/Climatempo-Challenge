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

interface weatherDataType {
  locale: {
    id: number
    name: string
    state: string
    latitude: number
    longitude: string
  }
  period: {
    begin: string
    end: string
  }
  weather: {
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
  }[]
}

interface APIDataContextProps {
  locales: localeDataType[]
  weather: weatherDataType[]
  setLocaleId: React.Dispatch<React.SetStateAction<number>>
  localeId: number
}

interface ContextProviderProps {
  children: ReactNode
}

export const APIDataContext = createContext({} as APIDataContextProps)

export function APIDataContextProvider({ children }: ContextProviderProps) {
  const [locales, setLocales] = useState([])
  const [weather, setWeather] = useState<weatherDataType[]>([])

  const [localeId, setLocaleId] = useState(0)

  const fetchApiData = useCallback(async () => {
    setWeather([])

    const weatherResponse: weatherDataType[] = await api
      .get('/weather')
      .then((data) => data.data)

    setLocales(await api.get('locales').then((data) => data.data))
    setWeather(
      weatherResponse.filter((localWeather) => {
        return localWeather.locale.id === localeId
      })
    )
  }, [locales, weather, localeId])

  useEffect(() => {
    fetchApiData()
  }, [localeId])

  return (
    <APIDataContext.Provider
      value={{
        locales,
        weather,
        localeId,
        setLocaleId,
      }}
    >
      {children}
    </APIDataContext.Provider>
  )
}
