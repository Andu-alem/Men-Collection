//import { getProducts } from '@/lib/api-queries'
import {
    dehydrate,
    HydrationBoundary,
    QueryClient
} from '@tanstack/react-query'
import Products from './products'

interface SearchParams {
    page: string
}
async function getProducts(page:string|null) {
    console.log("Page param is --- ", page)
    const response = await fetch(`http://localhost:3000/api/products?page=${page}`)
    
    const data = await response.json()

    return data
}

export default async function ProductsPage({ searchParams }:{ searchParams:SearchParams }) {
    const { page } = await searchParams
    const queryClinet = new QueryClient()

    await queryClinet.prefetchQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(page)
    })

    return (
        <HydrationBoundary state={ dehydrate(queryClinet) }>
            <Products />
        </HydrationBoundary>
    )
}