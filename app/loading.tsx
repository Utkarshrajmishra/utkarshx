"use client"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { LoadingConfig } from "@/config/loading"
const Loading=()=>{
    const [loadingText, setLoadingText] = useState(LoadingConfig[0])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setLoadingText((prev)=>LoadingConfig[(LoadingConfig.indexOf(prev)+1)%LoadingConfig.length])
        },1000)
        return ()=>clearInterval(interval)
    },[])

    return(
        <div className="flex items-center flex-col justify-center h-screen">
            <Loader2 className="size-7 animate-spin text-neutral-500" />
        <p className="text-lg text-neutral-400 font-host">{loadingText}</p>
        </div>
    )
}

export default Loading