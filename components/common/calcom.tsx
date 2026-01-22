"use client"
import Wrapper from "./wrapper"
import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

const Calcom = () => {
    useEffect(() => {
        const cal = async () => {
            try {
                const calApi = await getCalApi()
                if (calApi) {
                    calApi('on', {
                        action: 'bookingSuccessful',
                        callback: () => {
                            console.log('Booking successful!')
                        }
                    })
                }
            } catch (error) {
                console.error('Failed to initialize Cal API:', error)
            }
        }
        cal()
    }, [])

    return (
        
                <Cal
                    calLink={'utkarsh-raj-mishra-bxqa7v/30min'}
                    config={{
                        name: 'Portfolio Visitor',
                        email: '',
                        notes: 'Booked from portfolio website',
                    }}
                   
                />
           
    )
}

export default Calcom