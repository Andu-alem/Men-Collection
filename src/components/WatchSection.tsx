'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const WatchSection = () => {
    const { scrollYProgress } = useScroll()

    return (
        <div className="w-[90%] mx-auto h-screen sm:h-[120vh] flex flex-col-reverse sm:flex-row justify-center sm:justify-evenly items-center">
            <motion.p
                className="text-[30px] md:text-[35px] text-center w-full mx-auto sm:w-1/2 text-white"
                initial={{
                    y: 250,
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 0.3,
                    duration: 0.7
                }}
            >
                <span className="text-orange-500 text-[40px] md:text-[75px] font-bold">Count your happiness</span> <br /> with our lexury watch.
            </motion.p>
            <motion.div 
                className="border border-white my-5 sm:my-0 relative w-[330px] md:w-[450px] h-[50vh] sm:h-[75vh]"
                style={{
                    skewX: useTransform(scrollYProgress, [0, 1], [17, -17]),
                    opacity: 1
                }}
            >
                <Image 
                    className="absolute" 
                    fill={ true }
                    src="/watch-1.jpg" 
                    alt="watch" />
            </motion.div>
        </div>
    )
}

export default WatchSection