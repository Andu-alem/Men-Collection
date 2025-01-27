'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeInAnimation from './FadeInAnimation'
import TranslateAnimation from './TranslateAnimation'

const Collections = () => {
    return (
        <div className="h-[120vh] w-[77%] mx-auto">
            <div className="flex gap-10">
                <TranslateAnimation
                    className="relative flex-grow h-[250px]"
                    duration={ 1 }
                >
                    <Image
                        className="rounded-lg absolute border border-white"
                        src="/snicker.jpeg"
                        alt='snicker'
                        fill= { true }
                    />
                </TranslateAnimation>
                <TranslateAnimation
                    className="relative flex-grow h-[250px]"
                    duration={ 2 }
                >
                    <Image
                        className="rounded-lg absolute border border-white"
                        src="/shirt.jpg"
                        alt='shirt'
                        fill={ true }
                    />
                </TranslateAnimation>
            </div>
            <FadeInAnimation 
                className="my-3 flex justify-center text-orange-500 text-[30px] sm:text-[45px]"
                duration={ 1.5 }
            >
                <p>More collections on our <span className="text-white font-bold">store.</span></p>
            </FadeInAnimation>
            <div className="flex my-2 gap-10">
                <TranslateAnimation
                    className="relative flex-grow h-[250px]"
                    duration={ 1 }
                >
                    <Image
                        className="rounded-lg absolute border border-white"
                        src="/watches.jpg"
                        alt='watches'
                        fill= { true }
                    />
                </TranslateAnimation>
                <TranslateAnimation
                    className="relative flex-grow h-[250px]"
                    duration={ 2 }
                >
                    <Image
                        className="rounded-lg absolute border border-white"
                        src="/perfume2.jfif"
                        alt='perfume'
                        fill={ true }
                    />
                </TranslateAnimation>
            </div>
        </div>
    )
}

export default Collections