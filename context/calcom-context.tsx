"use client"

import { createContext, Dispatch, useState, useContext } from "react"

type CalComContextType = {
  open: boolean,
  setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const CalComContext = createContext<CalComContextType | null>(null)

const CalComContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)


  return (
    <CalComContext.Provider value={{ open, setOpen }}>
      {children}
    </CalComContext.Provider>
  )
}

export default CalComContextProvider

export const useCalCom = () => {
  const context = useContext(CalComContext);
  if (!context) {
    throw new Error("useCalCom must be used within a CalComContextProvider");
  }
  return context;
}
