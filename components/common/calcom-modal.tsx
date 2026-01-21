'use client'
import { useState } from "react";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

interface CalComModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const CalComModal = ({ open, onOpenChange }: CalComModalProps) => {
    const [showCalPop, setShowCalPop] = useState(false)
    useEffect(() => {
        const cal = async () => {
            try {
                const calApi = await getCalApi()
                if (calApi) {
                    calApi('on', {
                        action: 'bookingSuccessful',
                        callback: () => {
                            setShowCalPop(false)
                        }
                    })
                }
            } catch (error) {
                console.error('Failed to initialize Cal API:', error);
            }
        }
        cal()
    }, [])

    return (
       <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90vh] bg-neutral-900 border border-neutral-700 max-w-[calc(100vw-2rem)] overflow-hidden sm:max-w-[calc(100vw-4rem)] md:max-w-4xl">
            <DialogHeader>
                <DialogTitle>Book a Meeting</DialogTitle>
                <DialogDescription>
                    Schedule a time to connect and discuss opportunities
                </DialogDescription>
            </DialogHeader>
            <div className="max-h-[calc(90vh-220px)] border border-[1px]  border-neutral-800 overflow-y-scroll rounded-lg scroll scrollbar-thumb-sky-700 scrollbar-track-neutral-800">
                <Cal
                    calLink={'utkarsh-raj-mishra-bxqa7v/30min'}
                    config={{
                        name: 'Portfolio Visitor',
                        email: '',
                        notes: 'Booked from portfolio website',
                    }}
                    className="h-[500px] w-full rounded-lg"
                />
            </div>
        </DialogContent>
       </Dialog>
    )
}

export default CalComModal