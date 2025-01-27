'use client'
import { Button } from "./ui/button"

const HeroOutro = () => {
    return (
        <div className="h-screen w-full bg-[url('/collection.jpg')] bg-cover relative">
            <div className="w-full h-screen top-0 bg-gradient-to-l from-black via-black to-transparent"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
                <p 
                    className="text-[30px] text-orange-500 w-10/12 sm:w-2/5 my-5 text-center"
                >Enjoy our <span className="text-white font-bold">quality & lexury</span> suits, ties, shoes, watches, casual wearables, sunglasses, and perfumes.</p>

                <Button variant="outline" className="text-white bg-black">Shop Now</Button>
            </div>
        </div>
    )
}

export default HeroOutro