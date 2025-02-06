'use client'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { Button } from '../ui/button'

export default function AdminHeader() {
    return (
        <div className="sm:hidden flex-grow flex justify-between">
            <Link href="/admin" className="font-bold">Men's Collection</Link>
            <Button className="text-[15px] h-7 bg-zinc-700" onClick={ () => authClient.signOut() }>LOGOUT</Button>
        </div>
    )
}