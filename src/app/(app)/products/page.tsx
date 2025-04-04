import ProductCard from "@/components/ProductCard"
import PaginationSection from "@/components/PaginationSection"
import { Product } from "@/lib/types"
import { getAllProducts } from "@/lib/queries"

interface SearchParams {
    name?: string,
    page?: string
}

export default async function Page({ searchParams }:{ searchParams:Promise<SearchParams> }) {
    const { page, name } = await searchParams
    const { error, products, meta } = await getAllProducts(page , name)
    
    return (
        <div className="w-full flex flex-col items-center gap-5 mt-2 mb-5">
            {
                error ? (
                    <div>No products found</div>
                ) : (
                    <>
                        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 px-4 xl:px-10">
                            {
                                products?.map((product:Product, index:number) => (
                                    <ProductCard product={ product } key={ index } />
                                ))
                            }
                        </div>
                        { meta && <PaginationSection meta={ meta } />}
                    </>
                )
            }
        </div>
    )
}
