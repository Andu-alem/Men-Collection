
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Cart"
}

export default function Layout({ children }:{ children:React.ReactNode }) {
    return (
        <div className="flex justify-center">
            { children }
        </div>
    )
}