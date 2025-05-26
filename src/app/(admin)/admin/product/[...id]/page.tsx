import Image from 'next/image'
import AddToCart from '@/components/AddToCart'
import { 
    ScrollArea,
    ScrollBar
} from '@/components/ui/scroll-area'
import ProductCard from '@/components/admin-ui/ProductCard'
import { getProductByCategory, getProductById } from '@/lib/api-queries'

export default async function Page({ params }:{ params: { id: string[] } }) {
    const { product } = await getProductById(params)
    const { category } = await getProductByCategory(product.id)

    return (
        <div className="w-[90vw] sm:w-[94vw] md:w-[86vw] lg:w-[82vw] mx-auto">
            <div className="flex flex-col sm:flex-row gap-5 my-10">
                <Image
                    className="w-full mx-auto sm:w-1/2 rounded md" 
                    src={ product.imagePath }
                    alt={ 'product' } 
                    width={ 400 }
                    height={ 200 }
                />
                <div className="w-full mx-auto sm:w-1/2">
                    <h3 className="text-zinc-700 text-lg">{ product.name }</h3>
                    <p className="text-stone-700 text-[15px] my-4">{ product.description }</p>
                    <p className="text-stone-700 text-[15px] my-4">Price : { product.price }ETB</p>
                    <AddToCart product={ product } />
                </div>
            </div>
            <div className="my-7 border border-zinc-100 rounded-md p-4">
                <h3 className="font-bold text-lg my-2">Related Products</h3>
                <ScrollArea className="overflow-x-auto w-full">
                    <div className="flex space-x-2">
                    {
                        category.products.map((item:any, index:number) => (
                            <ProductCard key={ index } product={ item } />
                        ))
                    }
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    )
}