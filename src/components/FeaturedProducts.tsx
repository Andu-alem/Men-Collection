'use client'
import { Marquee } from "./magicui/marquee"
import Image from "next/image"

export default function FeaturedProducts() {
    return (
        <Marquee>
            <Image
                src="/background/watches.jpg"
                alt="watches"
                width={ 200 }
                height={ 200 }
            />
            <Image
                src="/background/watches.jpg"
                alt="watches"
                width={ 200 }
                height={ 200 }
            />
            <Image
                src="/background/watches.jpg"
                alt="watches"
                width={ 200 }
                height={ 200 }
            />
            <Image
                src="/background/watches.jpg"
                alt="watches"
                width={ 200 }
                height={ 200 }
            />
            <Image
                src="/background/watches.jpg"
                alt="watches"
                width={ 200 }
                height={ 200 }
            />
            <Image
                src="/background/watches.jpg"
                alt="watches"
                width={ 200 }
                height={ 200 }
            />
        </Marquee>
    )
}