'use client'
import Image from 'next/image'
import Link from 'next/link'
import { 
    Card, 
    CardContent,
    CardFooter,
    CardTitle
} from '../ui/card'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'
import { Product } from '@/lib/types'
import DeleteProduct from './DeleteProduct'


const ProductCard = ({ product }:{ product: Product }) => {
    const { id, name, imagePath, price, quantity } = product

    return (
        <Card className="border-zinc-200 dark:border-zinc-900">
            <CardContent className='p-2'>
                <div className="relative w-full h-[150px]">
                    <Image
                        className="absolute"
                        src={imagePath}
                        alt="product"
                        fill={ true }
                    />
                </div>
                <CardTitle className="my-2 text-zinc-700 dark:text-zinc-100 capitalize">
                    { name }
                </CardTitle>
                <p className="text-[15px] text-zinc-700 dark:text-zinc-200">Price : { price }ETB</p>
                <p className="text-[15px] text-zinc-700 dark:text-zinc-200">In stock: { quantity }</p>
            </CardContent>
            <CardFooter className="border-t border-gray-300 dark:border-zinc-900 py-2 px-3 flex justify-evenly">
                <Button className="text-[15px] border-zinc-400 h-7 px-1 sm:px-3 hover:text-amber-500" variant="outline" asChild>
                    <Link href="#">Update</Link>
                </Button>
                <Button className="cursor-pointer px-1 sm:px-3 hover:text-amber-500" variant="link" asChild>
                    <Link href={`/admin/product/${id}`}>
                        <MoreHorizontal />
                    </Link>
                </Button>
                <DeleteProduct id={ id } />
            </CardFooter>
        </Card>
    )
}

export default ProductCard