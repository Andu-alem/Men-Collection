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

export default function Header() {
    const { data, isPending } = authClient.useSession()
    const totalItems = useCartStore((state) => state.totalItems)
    const pathName = usePathname()
    const router = useRouter()

    return (
        <div className="z-50 sticky top-0 w-full p-2 flex flex-col gap-3 bg-white pt-4 pb-2 px-5 border-b border-zinc-300">
            <div className="flex flex justify-between">
                {
                    pathName.includes('/products') ? (
                        <HeaderMenu />
                    ):(
                        <ArrowLeftIcon className="cursor-pointer mt-1" onClick={ () => router.back() }/>
                    )
                }
                <div className="relative h-50 w-[100px] md:w-[150px] flex">
                    <Image className="absolute" src="/logo2.png" fill={ true } alt="logo" />
                    <h3 className="text-black font-bold">Men's Fashion</h3>
                </div>
                <div className="hidden sm:block">
                    <Search />
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/cart" className="relative">
                        <ShoppingCart className="text-orange-500 font-bold" size="32" />
                        {  totalItems > 0 && <Badge className="absolute top-0 right-0 z-50 text-[11px] rounded-full py-0 px-1 bg-black">{ totalItems }</Badge>}
                    </Link>
                    {
                        isPending ? (
                            <Skeleton className="h-7 rounded-md w-[40px]" />
                        ) : data ? (
                            <Button 
                                className="h-7 text-[14px]" 
                                onClick={() => authClient.signOut() }>LOGOUT</Button>
                        ):(
                            <Button className="h-7" asChild>
                                <Link className="text-[14px]" href={`/auth/login?callback=${pathName}`}>LOGIN</Link>
                            </Button>
                        )
                    }
                </div>
            </div>
            <div className="block sm:hidden px-[7%]">
                <Search />
            </div>
        </div>
    );
}