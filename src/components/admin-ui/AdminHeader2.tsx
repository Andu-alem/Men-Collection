'use client'
import { ArrowLeftIcon } from "lucide-react"
import HeaderElement from "@/components/admin-ui/HeaderElement"
import { useRouter } from "next/navigation"

export default function AdminHeader2() {
    const router = useRouter()
    return (
        <div className="sticky top-0 z-50 bg-gray-50 dark:bg-zinc-900 w-full flex gap-7 py-3 px-5 mb-5">
            <ArrowLeftIcon className="cursor-pointer mt-[2px]" onClick={ () => router.back() }/>
            <HeaderElement />
        </div>
    )
}