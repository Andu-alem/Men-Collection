'use client'
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { authClient } from "@/lib/auth-client"


export default function Layout({ children }:{ children:React.ReactNode }) {
    const { isPending, data } = authClient.useSession()
    const router = useRouter()
    const [isAccessGranted, setIsAccessGranted] = useState(false)

    useEffect(() => {
        if (!isPending){
            if (!data) {
                router.replace("/auth/login?callback=/admin")
            } else if (data.user.role !== 'admin') {
                router.replace("/products")
            } else {
                setIsAccessGranted(true)
            }
        }
    },[isPending])
    
    if (!isAccessGranted) {
        return (
            <div className="w-screen h-screen flex justify-center items-center dark:bg-zinc-900">
                <p className="text-lg font-bold text-zinc-700 dark:text-zinc-100">Loading....</p>
            </div>
        )
    }

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center">
            { children }
        </main>
    )
}