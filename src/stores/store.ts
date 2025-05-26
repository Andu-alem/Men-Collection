import { create } from 'zustand'
import { type Product } from '@/lib/types'

type CartItem = {
    product: Product,
    quantity: number
}

type States = {
    cart: CartItem[]|[],
    totalItems: number,
    totalPrice: number
}

type Actions = {
    addProduct: (product:Product) => void,
    removeProduct: (id:number) => void,
    decrementQuantity: (id:number) => void,
}

export const useCartStore = create<States&Actions>((set, get) => ({
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    addProduct: (product) => set((state) => ({
        cart: addNewProduct(product, state.cart),
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price
    })),
    removeProduct: (id) =>set((state) => {
        const item = state.cart.find(item => item.product.id === id)
        const filterdCart = state.cart.filter(item => item.product.id !== id)
        return {
            cart: filterdCart,
            totalItems: item ? (state.totalItems - item?.quantity): state.totalItems,
            totalPrice: item ? (state.totalPrice - (item.quantity * item.product.price)) : state.totalPrice
        }
    }),
    decrementQuantity: (id) => set((state) => ({
        cart: decrement(id, state.cart),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - getPrice(id, state.cart)
    }))
}))


function addNewProduct(newProduct:Product, cart:CartItem[]) {
    const matchProduct = cart.find(item => item.product.id === newProduct.id)
    if (matchProduct) {
        // if the product item is added to the cart just increment quantity
        const newCart = cart.map((item) => {
            if (item.product.id === newProduct.id) {
                return {
                    product : item.product,
                    quantity: item.quantity+1
                    
                }
            }
            return item
        })
        return newCart
    } else {
        // or just add the new product to the cart
        return [
            ...cart,
            {
                product: newProduct,
                quantity: 1
            }
        ]
    }
}

function decrement(id:number, cart:CartItem[]) {
    let newCart = cart.map((item) => {
        if (item.product.id === id) {
            return {
                product: item.product,
                quantity: item.quantity - 1
            }
        }
        return item
    })
    const item = newCart.find((item) => item.product.id === id)
    if (item && item?.quantity < 1) {
        newCart = newCart.filter((item) => item.product.id !== id)
    }
    return newCart
} 

function getPrice (id:number, cart:CartItem[]) {
    let item = cart.find((item) => item.product.id === id)
    console.log("Item inside get price --- ", item)
    return item ? item?.product.price : 0
}