'use client'
import { useState } from "react"
import { Slider } from "./ui/slider"

export default function PriceRangeSlider() {
    const [priceRange, setPriceRange] = useState(1000)

    return (
        <div className="px-2">
            <p className="my-2 text-[17px]">Filter by price range <span className="font-semibold">500 - { priceRange }</span></p>
            <Slider className="px-2" defaultValue={[1000]} min={ 500 } max={ 3000 } step={ 200 } onValueChange={ (value) => setPriceRange(value[0]) } />
        </div>
    )
}