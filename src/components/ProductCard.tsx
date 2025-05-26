'use client'
import Image from 'next/image'
import Link from 'next/link'
import { 
    Card, 
    CardContent,
    CardFooter,
    CardTitle
} from './ui/card'
import { Button } from './ui/button'
import { MoreHorizontal } from 'lucide-react'
import { Product } from '@/lib/types'
import AddToCart from './AddToCart'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Lens } from "@/components/magicui/lens"

const ProductCard = ({ product }:{ product: Product }) => {
    const { id, name, imagePath, price } = product

    return (
        <Card>
            <CardContent className='p-0'>
                <Lens
                    zoomFactor={2}
                    lensSize={150}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                    >
                    <div className="relative w-full h-[225px]">
                        <Image
                            className="absolute rounded-t-lg"
                            src={imagePath}
                            alt="product"
                            fill={ true }
                        />
                    </div>
                    </Lens>
                <CardTitle className="mt-2 mx-2 text-zinc-700 dark:text-zinc-200 text-[17px] capitalize">
                    <Link className="hover:underline" href={`/product/${id}`}>
                        { name }
                    </Link>
                </CardTitle>
                <p className="text-[15px] mx-2 my-2 text-zinc-700 dark:text-zinc-300">Price : { price }ETB</p>
            </CardContent>
            <CardFooter className="py-2 px-1 flex justify-between border-t border-gray-200 dark:border-zinc-700">
                <AddToCart product={ product } />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button className="cursor-pointer w-5" variant="link" asChild>
                                <Link className="hover:text-orange-500" href={`/product/${id}`}>
                                    <MoreHorizontal />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>See Detail</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardFooter>
        </Card>
    )
}

export default ProductCard