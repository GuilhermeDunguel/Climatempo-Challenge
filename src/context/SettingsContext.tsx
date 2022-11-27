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
  const [temperature, setTemperature] = useState<temperature>('celsius')
  const [precipitation, setPrecipitation] =
    useState<precipitation>('milimeters')

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
