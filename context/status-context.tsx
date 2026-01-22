"use client"

import { useContext, useState, useEffect } from "react"
import { createContext, Dispatch, SetStateAction } from "react"

type StatusContextType = {
    commitNumber: number,
    loader: boolean,
    statusError: boolean,
    setStatusError: Dispatch<SetStateAction<boolean>>,
    setCommitNumber: Dispatch<SetStateAction<number>>,
    setLoader: Dispatch<SetStateAction<boolean>>,
}

export const StatusContext = createContext<StatusContextType | null>(null)

const StatusContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [commitNumber, setCommitNumber] = useState(0)
    const [loader, setLoader] = useState(false)
    const [statusError, setStatusError] = useState(false)

   
    useEffect(()=>{
    console.log(commitNumber)
  },[commitNumber])

    return (
        <StatusContext.Provider value={{ commitNumber, loader, statusError, setStatusError, setCommitNumber, setLoader }}>
            {children}
        </StatusContext.Provider>
    )
}

export default StatusContextProvider


export const useStatus = () => {
    const context = useContext(StatusContext)
    if (!context) {
        throw new Error("useStatus must be used within a StatusContextProvider")
    }
    return context
}