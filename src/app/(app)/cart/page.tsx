'use client'
import { useState } from "react"
import Link from "next/link"
import { useCartStore } from "@/stores/store"
import { authClient } from "@/lib/auth-client"
import { addOrder } from "@/lib/actions"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import CartItem from "@/components/CartItem"
import { toast } from "sonner"

export default function Page() {
    const { isPending, data } = authClient.useSession()
    const state = useCartStore()
    const [error, setError] = useState(false)
    const [sending, setSending] = useState(false)

    const handleSubmit = async () => {
        const cart = state.cart
        if (cart.length < 1) return

        setSending(true)
        const userId = data ? data.user.id:''
        const response = await addOrder(cart, userId)
        if (response.error) {
            setError(true)
            toast("Failed to submit your order.")
        } else {
            toast("Your order submited successfully.")
            state.reset()
        }
        setSending(false)
    }

    return (
        <div className="container mx-auto flex flex-col gap-2 mt-3 mb-5">
            <div className="text-center">
                <h3 className="font-semibold text-lg my-2 border-b border-zinc-300 pb-3 text-zinc-800 dark:text-zinc-100">Products in Cart</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
                <ScrollArea className="max-h-[67vh] flex flex-col">
                    {
                        state.cart.length < 1 ? (
                            <div className="w-full min-h-[40vh] max-h-[70vh] flex justify-center items-center">
                                <Alert variant="destructive" className="text-center">
                                    <AlertTitle className="flex justify-center items-center gap-2">
                                        <AlertCircle className="text-red-500 -mt-[2px]" />
                                        Empty Cart
                                    </AlertTitle>
                                    <AlertDescription>
                                        There is no item in the cart please add.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        ) :
                        state.cart.map((item, index) => (
                            <CartItem key={index} product={ item.product } quantity={ item.quantity } />
                        ))
                    }
                </ScrollArea>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-full flex flex-col gap-1 text-[15px]">
                        <div className="flex justify-between items-center border-b border-zinc-300 py-1">
                            <span>Summed Price</span>
                            <span>{ (state.totalPrice).toFixed(2) }</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-zinc-300 py-1">
                            <span>Vat 15%</span>
                            <span>{ (state.totalPrice * 0.15).toFixed(2) }</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-zinc-300 py-1">
                            <span>Total price</span>
                            <span>{ (state.totalPrice + (state.totalPrice * 0.15)).toFixed(3) }</span>
                        </div>
                    </div>
                    { error && <p className="my-2 px-4 text-[15px] text-red-400 font-semibold">Error occured while submiting your order. Please try again.</p> }
                    <Button className={`text-[17px] ${ (isPending || !data) ? 'opacity-50':'opacity-100'} ${ sending ? 'animate-pulse':'animate-none' }`} disabled={ isPending || !data } onClick={ handleSubmit }>Put Order</Button>
                    {
                        (!isPending && !data) && <div className="text-[15px] text-zinc-500 my-2">You must <Link className="text-blue-500 font-bold" href="/auth/login?callback=/cart">Login</Link> to make orders.</div>
                    }
                </div>
            </div>
        </div>
    )
}