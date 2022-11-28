import React, { createContext, ReactNode, useState } from 'react'

interface SettingsContextProviderProps {
  children: ReactNode
}

type temperature = 'celsius' | 'fahrenheit'
type precipitation = 'milimeters' | 'inches'

interface SettingsContextProps {
  temperature: string
  precipitation: string
  setTemperature: React.Dispatch<React.SetStateAction<temperature>>
  setPrecipitation: React.Dispatch<React.SetStateAction<precipitation>>
}

export const SettingsContext = createContext({} as SettingsContextProps)

export function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [temperature, setTemperature] = useState<temperature>(
    (localStorage.getItem(
      'temperature-settings@climatempo-v1.0.1'
    ) as temperature) || 'celsius'
  )
  const [precipitation, setPrecipitation] = useState<precipitation>(
    (localStorage.getItem(
      'precipitation-settings@climatempo-v1.0.1'
    ) as precipitation) || 'milimeters'
  )

  localStorage.setItem('temperature-settings@climatempo-v1.0.1', temperature)
  localStorage.setItem(
    'precipitation-settings@climatempo-v1.0.1',
    precipitation
  )

  return (
    <SettingsContext.Provider
      value={{
        temperature,
        precipitation,
        setTemperature,
        setPrecipitation,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
