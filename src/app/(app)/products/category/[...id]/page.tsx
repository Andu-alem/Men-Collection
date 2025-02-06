import ProductCard from "@/components/ProductCard"
import { Product } from "@/lib/types"
import { getProductsByCategory } from "@/lib/queries"

interface Params {
    id: string[]
}

export default async function Page({ params }:{ params:Promise<Params> }) {
    const { id } = await params
    const { error, products } = await getProductsByCategory(id[0])
    
    return (
        <div className="w-full flex flex-col items-center gap-5 py-5">
            {
                error ? (
                    <div>No products found under this category</div>
                ) : (
                    <>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
                            {
                                products?.map((product:Product, index:number) => (
                                    <ProductCard product={ product } key={ index } />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}
