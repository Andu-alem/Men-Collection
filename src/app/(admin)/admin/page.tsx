import ProductCard from "@/components/admin-ui/ProductCard"
import PaginationSection from "@/components/PaginationSection"
import { Product } from "@/lib/types"
import { getProducts } from "@/lib/api-queries"

export default async function Page({ searchParams }:{ searchParams: any}) {
    const { products, meta } = await getProducts(searchParams)
    
    return (
        <div className="w-full flex flex-col items-center gap-5 py-5">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
                {
                    products.map((product:Product, index:number) => (
                        <ProductCard product={ product } key={ index } />
                    ))
                }
            </div>
            <PaginationSection meta={ meta } />
        </div>
    )
}
