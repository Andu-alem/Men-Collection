import { getProductsByCategory } from "@/lib/queries"
import ProductCard from "./ProductCard"

export default async function RelatedProducts({ id }:{ id: number }) {
    const { products } = await getProductsByCategory(String(id))
    return (
        <div className="flex space-x-3">
            {
                products?.map((item:any, index:number) => (
                    <div key={ index } className="w-[230px]">
                    <ProductCard product={ item } />
                    </div>
                ))
            }
        </div>
    )
}