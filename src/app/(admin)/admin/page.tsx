import AdminHeader from "@/components/admin-ui/AdminHeader"
import ProductCard from "@/components/admin-ui/ProductCard"
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
        <div className="w-full flex flex-col items-center gap-5 sm:py-5">
            <AdminHeader />
            {
                error ? (
                    <div>No products found</div>
                ) : (
                    <>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
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
