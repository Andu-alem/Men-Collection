'use client'
import { useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from 'next/navigation'
import { authClient } from "@/lib/auth-client"


export default function Layout({ children }:{ children:React.ReactNode }) {
    const { isPending, data, error } = authClient.useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    
    useEffect(() => {
        if (data) {
            const callback = searchParams.get("callback")
            if (callback) {
                router.replace(callback)
            } else {
                router.replace("/products")
            }
        }
    }, [data])
    
    if (isPending || data) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <p className="text-lg font-bold text-zinc-700">Loading....</p>
            </div>
        )
    }

    return (
        <main className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-7">
                <Link className="text-[40px] font-bold text-zinc-700" href="/products">Men's Collection</Link>
            </div>
            { children }
        </main>
    )
}