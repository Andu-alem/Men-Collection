'use client'
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import Search from "./SearchBar"
import { 
    ShoppingCart,
    ArrowLeftIcon
} from "lucide-react"
import { Button } from "./ui/button"
import { authClient } from "@/lib/auth-client"
import { Skeleton } from "./ui/skeleton"
import { Badge } from "./ui/badge"
import { useCartStore } from "@/stores/store"
import HeaderMenu from "./HeaderMenu"
import ModeToggle from "./ModeToggle"

export default function Header() {
    const { data, isPending } = authClient.useSession()
    const totalItems = useCartStore((state) => state.totalItems)
    const pathName = usePathname()
    const router = useRouter()

    return (
        <div className="z-50 sticky top-0 w-full p-2 flex flex-col gap-3 bg-white dark:bg-zinc-900 pt-4 pb-2 px-5 border-b border-zinc-300">
            <div className="flex flex justify-between items-center">
                {
                    pathName.includes('/products') ? (
                        <HeaderMenu />
                    ):(
                        <ArrowLeftIcon className="cursor-pointer hover:text-zinc-500" onClick={ () => router.back() }/>
                    )
                }
                <Link href="/products" className="flex items-end">
                    <Image src="/logo2.png" width={40} height={40} alt="logo" />
                    <span className="font-semibold text-zinc-700 dark:text-zinc-200 text-sm sm:text-xl hover:underline">Classic Men</span>
                </Link>
                <div className="hidden sm:block">
                    <Search />
                </div>
                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Link href="/cart" className="relative">
                        <ShoppingCart className="text-amber-500 font-bold" size="32" />
                        {  totalItems > 0 && <Badge className="absolute top-0 right-0 z-50 text-[11px] rounded-full py-0 px-1 bg-black dark:bg-white dark:text-zinc-700">{ totalItems }</Badge>}
                    </Link>
                    {
                        isPending ? (
                            <Skeleton className="h-7 rounded-md w-[40px]" />
                        ) : data ? (
                            <Button 
                                className="h-7 text-[14px]" 
                                onClick={() => authClient.signOut() }>LOGOUT</Button>
                        ):(
                            <Button className="h-7 text-[14px]" asChild>
                                <Link className="" href={`/auth/login?callback=${pathName}`}>LOGIN</Link>
                            </Button>
                        )
                    }
                </div>
            </div>
            <div className="block sm:hidden px-[15%]">
                <Search />
            </div>
        </div>
    );
}