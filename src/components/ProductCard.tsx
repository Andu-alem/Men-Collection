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


const ProductCard = ({ product }:{ product: Product }) => {
    const { id, name, imagePath, price } = product

    return (
        <Card>
            <CardContent className='p-2'>
                <div className="relative w-full h-[175px]">
                    <Image
                        className="absolute rounded-md"
                        src={imagePath}
                        alt="product"
                        fill={ true }
                    />
                </div>
                <CardTitle className="mt-2 text-zinc-700 dark:text-zinc-200 text-[17px] capitalize">
                    { name }
                </CardTitle>
                <p className="text-[15px] text-zinc-700 dark:text-zinc-300">Price : { price }ETB</p>
            </CardContent>
            <CardFooter className="py-2 px-3 flex justify-between border-t border-gray-200 dark:border-zinc-700">
                <AddToCart product={ product } />
                <Button className="cursor-pointer" variant="link" asChild>
                    <Link className="hover:text-orange-500" href={`/product/${id}`}>
                        <MoreHorizontal />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard