'use client'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'

import { Product } from '@/lib/types'
import { useCartStore } from '@/stores/store'

export default function AddToCart({ product }:{ product:Product }) {
    const addProduct = useCartStore((state) => state.addProduct)
    return (
        <Button className="py-0 h-10 border-zinc-400 dark:border-zinc-800" size="sm" variant="outline" onClick={ () => addProduct(product)}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
      </Button>
    )
}