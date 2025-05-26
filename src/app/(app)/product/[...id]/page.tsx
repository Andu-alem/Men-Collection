import Image from 'next/image'
import AddToCart from '@/components/AddToCart'
import { 
    ScrollArea,
    ScrollBar
} from '@/components/ui/scroll-area'
import { getProductById } from '@/lib/queries'
import { Suspense } from 'react'
import RelatedProducts from '@/components/RelatedProducts'
import { Metadata } from 'next'

interface Params {
    id: string[]
}

export async function generateMetadata({ params }:{ params:Promise<Params> }):Promise<Metadata> {
    const { id } = await params
    const { product } = await getProductById(id[0])

    return {
        title: product?.name,
    }
}

export default async function Page({ params }:{ params:Promise<Params> }) {
    const { id } = await params
    const { product } = await getProductById(id[0])

    return (
        <div className="w-[90vw] sm:w-[94vw] md:w-[86vw] lg:w-[82vw] mx-auto">
            <div className="flex flex-col sm:flex-row gap-5 my-5">
                <div className="relative w-full sm:w-1/2 mx-auto h-[55vh]">
                    <Image
                        className="rounded md absolute" 
                        src={ product?.imagePath ?? '' }
                        alt={ 'product' } 
                        fill={ true }
                    />
                </div>
                <div className="w-full mx-auto sm:w-1/2 text-zinc-800 dark:text-gray-200">
                    <h3 className="font-semibold text-lg capitalize">{ product?.name }</h3>
                    <p className="text-[15px] my-4">{ product?.description }</p>
                    <p className="text-[15px] my-4">Price : { product?.price }ETB</p>
                    { product && <AddToCart product={ product } />}
                </div>
            </div>
            <div className="my-7 border border-zinc-100 dark:border-zinc-700 rounded-md p-4">
                <h3 className="font-bold text-lg my-2">Related Products</h3>
                    <ScrollArea className="overflow-x-auto w-full">
                        <Suspense fallback={ <div>Loading...</div> }>
                            {product && <RelatedProducts id={ product?.categoryId } />}
                        </Suspense>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
            </div>
        </div>
    )
}