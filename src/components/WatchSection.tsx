'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TextAnimate } from './magicui/text-animate'

const WatchSection = () => {
    const { scrollYProgress } = useScroll()

    return (
        <div className="w-[90%] sm:w-10/12 mx-auto h-screen sm:h-[120vh] flex flex-col-reverse sm:flex-row justify-center sm:justify-evenly items-center">
            <TextAnimate className="text-orange-500 text-[30px] md:text-[47px] font-semibold sm:w-1/2 text-center sm:text-left" animate="scaleUp" by="word">
                Count your blessing with our lexury watches
            </TextAnimate>
            <motion.div 
                className="border border-white my-5 sm:my-0 relative w-[300px] md:w-[400px] h-[50vh] sm:h-[75vh]"
                style={{
                    skewX: useTransform(scrollYProgress, [0, 1], [15, -15]),
                    opacity: 1
                }}
            >
                <Image 
                    className="absolute" 
                    fill={ true }
                    src="/background/watch-1.jpg" 
                    alt="watch" />
            </motion.div>
        </div>
    )
}

export default WatchSection