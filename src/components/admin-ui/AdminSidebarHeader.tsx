'use client'
import Link from 'next/link'
import Image from 'next/image'
import { authClient } from '@/lib/auth-client'
import { Button } from '../ui/button'
import ModeToggle from '../ModeToggle'

export default function AdminSidebarHeader() {
    return (
        <div className="flex justify-between items-center py-2 pr-1">
            <Link href="/admin" className="flex items-end">
                    <Image src="/logo2.png" width={40} height={40} alt="logo" />
                    <span className="font-semibold text-zinc-200 text-xl sm:text-[15px] hover:underline">Classic Men</span>
                </Link>
            <ModeToggle />
            <Button className="text-[15px] h-7 px-2 font-semibold" variant="secondary" onClick={ () => authClient.signOut() }>LOGOUT</Button>
        </div>
    )
}