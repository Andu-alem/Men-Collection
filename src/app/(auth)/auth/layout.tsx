'use client'
import Link from "next/link"
import { useRouter, useSearchParams } from 'next/navigation'
import { authClient } from "@/lib/auth-client"


export default function Layout({ children }:{ children:React.ReactNode }) {
    const { isPending, data } = authClient.useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    
    if (!isPending && data) {
        const callback = searchParams.get("callback")
        if (callback) {
            router.replace(callback)
        } else {
            router.replace("/products")
        }
    }

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
                <Link className="text-[40px] font-bold text-zinc-700" href="/products">Men&apos;s Collection</Link>
            </div>
            { children }
        </main>
    )
}