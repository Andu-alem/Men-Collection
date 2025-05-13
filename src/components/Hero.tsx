import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'
import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import { MorphingText } from "./magicui/morphing-text"
import { TextAnimate } from "./magicui/text-animate"
import FadeInAnimation from './FadeInAnimation'


const hero = {
    text: ["Dress Sharp.", "Live Bold.", "Be Fashionable.", "Be Stylish."],
    description: "Explore our curated collection of men's fashion and find the pieces that speak to you. From classic essentials to contemporary trends, we've got everything you need to define your personal style."
}

const Hero = () => {
    const transition = {
        duration: 1.5,
        delay: 1,
        type: "spring",
        stiffness: 100
    }
    return (
        <div className="relative">
            <div className="w-full h-screen mx-auto bg-[url('/background/bg3.jpg')] bg-cover fixed -z-50"></div>
            <div className="h-screen w-full bg-gradient-to-l from-black via-transparent-50 to-transparent -z-50 fixed top-0"></div>
            <div className="h-[100vh] flex flex-col justify-center items-center">
                <FadeInAnimation
                    duration={ 1 }
                    className="flex flex-col justify-center items-center"
                >
                    <Image
                        src="/logo.png"
                        alt='logo'
                        width={ 250 }
                        height={ 100 }
                    />
                </FadeInAnimation>
                <div className="w-11/12 md:w-2/3 flex flex-col items-center">
                    <motion.div
                        className="w-full"
                        initial={{
                            opacity: 0,
                            translateY: -50
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0
                        }}
                        transition={ transition }
                    >
                        <MorphingText className="text-[40px] text-center sm:text-[55px] lg:text-[75px] font-bold text-orange-500" texts={ hero.text } />
                    </motion.div>
                    <TextAnimate className="text-gray-200 text-[20px] text-center font-light tracking-wide" animation="slideLeft" by="word">
                        { hero.description }
                    </TextAnimate>
                    <InteractiveHoverButton className="my-5">
                        <Link href="/products">
                            Shop Now
                        </Link>
                    </InteractiveHoverButton>
                </div>
            </div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    )
}

export default Hero