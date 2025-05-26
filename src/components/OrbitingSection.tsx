'use client'
import { OrbitingCircles } from "./magicui/orbiting-circles"
import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import { Ripple } from "./magicui/ripple"
import { AnimatedGradientText } from "./magicui/animated-gradient-text"

export default function OrbitingSection() {
    return (
        <div className="relative bg-transparent flex h-screen w-full overflow-hidden flex-col items-center justify-center z-50">
            <AnimatedGradientText className="text-white text-lg tracking-wide bg-slate-900">
                Our Collections
            </AnimatedGradientText>
            <OrbitingCircles>
                <span className="text-white font-semibold text-[20px]">Suits</span>
                <span className="text-white font-semibold text-[20px]">Watches</span>
                <span className="text-white font-semibold text-[20px]">Shoes</span>
                <span className="text-white font-semibold text-[20px]">Shirts</span>
            </OrbitingCircles>
            <OrbitingCircles radius={270} reverse>
                <span className="text-white font-semibold text-[20px]">Casual Clothings</span>
                <span className="text-white font-semibold text-[20px]">Ties</span>
                <span className="text-white font-semibold text-[20px]">Perfumes</span>
                <span className="text-white font-semibold text-[20px]">Snickers</span>
                <span className="text-white font-semibold text-[20px]">Sun Glasses</span>
            </OrbitingCircles>
            <Ripple mainCircleOpacity={ 0.3 } />
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    )
}