'use client'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { Button } from '../ui/button'

export default function AdminSidebarHeader() {
    return (
        <div className="flex justify-between py-3 pr-1">
            <Link href="/admin" className="font-bold">Men&apos;s Collection</Link>
            <Button className="text-[15px] h-7 bg-zinc-700" onClick={ () => authClient.signOut() }>LOGOUT</Button>
        </div>
    )
}