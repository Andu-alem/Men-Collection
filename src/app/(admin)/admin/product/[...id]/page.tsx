import { Suspense } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
    ScrollArea,
    ScrollBar
} from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { getProductById } from '@/lib/queries'
import AdminRelatedProducts from '@/components/admin-ui/AdminRelatedProducts'
import DeleteProduct from '@/components/admin-ui/DeleteProduct'

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
        <div className="">
            <div className="flex flex-col sm:flex-row gap-5 px-7">
                <Image
                    className="rounded md" 
                    src={ product?.imagePath ?? '' }
                    alt={ 'product' } 
                    width={ 300 }
                    height={ 200 }
                />
                <div className="w-full mx-auto sm:w-1/2">
                    <h3 className="text-zinc-700 text-lg capitalize">{ product?.name }</h3>
                    <p className="text-stone-700 text-[15px] my-4">{ product?.description }</p>
                    <p className="text-stone-700 text-[15px] my-4">Price : { product?.price }ETB</p>
                    <div className="flex gap-7">
                        <Button className="text-[15px] border-zinc-400 h-7 hover:text-orange-500" variant="outline" asChild>
                            <Link href="/admin/update">Update</Link>
                        </Button>
                        {product && <DeleteProduct id={ product.id } />}
                    </div>
                </div>
            </div>
            <div className="my-7 border border-zinc-100 rounded-md p-4">
                <h3 className="font-bold text-lg my-2">Related Products</h3>
                    <ScrollArea className="overflow-x-auto w-full">
                        <Suspense fallback={ <div>Loading...</div> }>
                            {product && <AdminRelatedProducts id={ product?.categoryId } />}
                        </Suspense>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
            </div>
        </div>
    )
}