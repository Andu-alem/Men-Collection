'use client'
import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import { Button } from "./ui/button"
import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"


const HeroOutro = () => {
    return (
        <div className="relative h-screen w-full bg-[url('/background/collection.jpg')] bg-cover relative">
            <div className="w-full h-screen top-0 bg-gradient-to-l from-black to-transparent"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
                <p 
                    className="text-[23px] md:text-[30px] text-orange-500 w-10/12 sm:w-3/5 my-5 text-center tracking-wide font-light leading-7"
                >Enjoy our <span className="text-white">Quality & Lexury</span> suits, ties, shoes, watches, casual wearables, sunglasses, and perfumes.</p>

                <Button variant="outline" className="text-white bg-black group rounded-2xl text-sm font-semibold" asChild>
                    <span className="flex">
                        <Link href="/products">Shop Now</Link>
                        <ChevronRightIcon className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </span>
                </Button>
            </div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    )
}

export default HeroOutro