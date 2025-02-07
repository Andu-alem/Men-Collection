'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { authClient } from "@/lib/auth-client"


export default function Layout({ children }:{ children:React.ReactNode }) {
    const { isPending, data } = authClient.useSession()
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (!isPending && data) {
            const callback = searchParams.get("callback")
            if (callback) {
                router.replace(callback)
            } else {
                router.replace("/products")
            }
        }
    },[isPending])

    if (isPending || data) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <p className="text-lg font-bold text-zinc-700">Loading....</p>
            </div>
        )
    }

    return (
        <main className="h-screen w-screen bg-[url('/background/bg3.jpg')] bg-cover">
            <div className="h-screen w-screen backdrop-blur-3xl flex flex-col justify-center items-center">
                <div className="flex justify-center items-center mb-7">
                    <Link className="" href="/products">
                        <Image src="/logo.png" alt="logo" width={100} height={100} />
                    </Link>
                </div>
                { children }
            </div>
        </main>
    )
}