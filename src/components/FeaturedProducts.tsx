import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import { Marquee } from "./magicui/marquee"
import Image from "next/image"

interface Product {
    image: string,
    name: string,
    price: string
}

const productData:Product[] = [
    {
        image: "/featured/suit2.jpg",
        name: "Stylish Suit",
        price: "15,400 ETB"
    },
    {
        image: "/featured/shoe2.jpg",
        name: "Classic",
        price: "15,400 ETB"
    },
    {
        image: "/featured/valentine.jpg",
        name: "Valentino Perfume",
        price: "7,300 ETB"
    },
    {
        image: "/featured/snicker.jpeg",
        name: "Comfortable Snicker",
        price: "5,700 ETB"
    },
    {
        image: "/featured/suit3.jpeg",
        name: "Stylish Suit",
        price: "15,400 ETB"
    },
    {
        image: "/featured/suit1.jpg",
        name: "Stylish Suit",
        price: "15,400 ETB"
    },
    {
        image: "/featured/shoe.jpg",
        name: "Classic",
        price: "15,400 ETB"
    },
]

const Product = ({ image, name, price }: Product) => {
    return (
        <div className="bg-gray-300 rounded-xl w-[270px]">
            <div className="relative w-full h-[250px] rounded-lg">
                <Image
                    className="rounded-t-xl"
                    src={ image }
                    alt={ name }
                    fill={ true }
                />
            </div>
            <div className="flex justify-between my-2 text-[17px] text-zinc-700 px-2 font-light">
                <p className="font-semibold">{ name }</p>
                <p>{ price }</p>
            </div>
        </div>
    )
}

export default function FeaturedProducts() {
    return (
        <div className="relative h-[500px] md:h-[550px] w-full mx-auto flex-col items-center justify-center overflow-hidden bg-transparent md:shadow-sm">
            <div className="my-7 text-center">
                <h3 className="text-gray-100 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-wider">Featured Products</h3>
            </div>
            <div className="relative flex z-50">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {
                        productData.map((product: Product, index: number) => (
                            <Product key={ index } image={ product.image } name={ product.name } price={ product.price } />
                        ))
                    }
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-500"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
            </div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    )
}