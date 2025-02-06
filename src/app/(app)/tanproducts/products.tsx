'use client'

import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/ProductCard"
import PaginationSection from "@/components/PaginationSection"
import { Product } from "@/lib/types"


async function getProducts(page:string|null) {
    console.log("Page param is --- ", page)
    const response = await fetch(`http://localhost:3000/api/products?page=${page}`)
    
    const data = await response.json()

    return data
}

export default function Products() {
    const searchParams = useSearchParams()
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(searchParams.get("page"))
    })
    console.log("Tanstack response is ---- ", searchParams.get('page'))
    return (
        <div className="w-full flex flex-col items-center gap-5 py-5">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
                {
                    data.products.map((product:Product, index:number) => (
                        <ProductCard product={ product } key={ index } />
                    ))
                }
            </div>
            <PaginationSection meta={ data.meta } />
        </div>
    )
}