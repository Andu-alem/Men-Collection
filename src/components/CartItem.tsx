import { useCartStore } from "@/stores/store"
import { Product } from "@/lib/types"
import Image from "next/image"
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle
} from "./ui/card"
import { Button } from "./ui/button"
import { XSquareIcon } from "lucide-react"

export default function CartItem({ product, quantity }:{ product:Product, quantity:number }) {
    const cartState = useCartStore()
    const { id, name, price, imagePath } = product
    return (
        <Card className="flex my-2 pt-2">
            <CardHeader className="relative h-[170px] w-[200px]">
                <Image className="absolute ml-2 rounded-md" src={ imagePath } fill={ true } alt={ name } />
            </CardHeader>
            <CardContent className="flex-grow">
                <CardTitle className="flex justify-between">
                    { name } 
                    <XSquareIcon className="text-red-500 cursor-pointer hover:text-red-300" onClick={ () => cartState.removeProduct(id) } /> 
                </CardTitle>
                <div className="text-[15px] flex flex-col">
                    <span>Price : { price }ETB</span>
                    <span>Quantity: { quantity }</span>
                    <span>Total price: { (price * quantity).toFixed(2) }</span>
                </div>
                <div className="flex gap-5 mt-3">
                    <Button className="text-[15px] h-7 px-2" onClick={ () => cartState.addProduct(product) }>Increase</Button>
                    <Button className="text-[15px] h-7 px-2" variant="outline" onClick={ () => cartState.decrementQuantity(id) }>Decrease</Button>
                </div>
            </CardContent>
        </Card>
    )
}