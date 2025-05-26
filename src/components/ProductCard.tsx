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
    const { id, name, imagePath, price, quantity } = product

    return (
        <Card className="border-zinc-200 shadow-none">
            <CardContent className='p-2'>
                <div className="relative w-full h-[150px]">
                    <Image
                        className="absolute"
                        src={imagePath}
                        alt="product"
                        fill={ true }
                    />
                </div>
                <CardTitle className="my-2 text-zinc-700">
                    { name }
                </CardTitle>
                <p className="text-[15px] text-zinc-700">Price : { price }ETB</p>
                <p className="text-[15px] text-zinc-700">Quantity: { quantity }</p>
            </CardContent>
            <CardFooter className="border-t border-gray-300 py-2 px-3 flex justify-evenly">
                <AddToCart product={ product } />
                <Button className="cursor-pointer" variant="link" asChild>
                    <Link href={`/product/${id}`}>
                        <MoreHorizontal />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard