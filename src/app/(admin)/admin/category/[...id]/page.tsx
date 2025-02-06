import AdminHeader from "@/components/admin-ui/AdminHeader"
import ProductCard from "@/components/admin-ui/ProductCard"
import { Product } from "@/lib/types"
import { getProductsByCategory } from "@/lib/queries"

interface Params {
    id: string[]
}

export default async function Page({ params }:{ params:Promise<Params> }) {
    const { id } = await params
    const { error, products } = await getProductsByCategory(id[0])
    
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
                    </>
                )
            }
        </div>
    )
}
