'use client'
import { Button } from './ui/button'
import { PlusIcon } from 'lucide-react'

import { Product } from '@/lib/types'
import { useCartStore } from '@/stores/store'

export default function AddToCart({ product }:{ product:Product }) {
    const addProduct = useCartStore((state) => state.addProduct)
    return (
        <Button className="py-0 h-7 border-zinc-400 dark:border-zinc-800 hover:text-amber-500" variant="outline" onClick={ () => addProduct(product)}>
            Cart<PlusIcon />
        </Button>
    )
}