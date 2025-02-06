'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

const Hero = () => {
    const transition = {
        duration: 1.5,
        delay: 1,
        type: "spring",
        stiffness: 100
    }
    return (
        <div>
            <div className="w-full h-screen mx-auto bg-[url('/background/bg3.jpg')] bg-cover fixed -z-50"></div>
            <div className="h-screen w-full bg-gradient-to-l from-black via-transparent-50 to-transparent -z-50 fixed top-0"></div>
            <div className="h-[100vh] flex justify-center items-center">
                <div className="w-11/12 md:w-2/3 flex flex-col items-center gap-5">
                    <motion.h3
                        className="text-[57px] text-center sm:text-[75px] lg:text-[100px] font-bold text-orange-500"
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
                        Be Fashionable.
                    </motion.h3>
                    <motion.p 
                        className="text-gray-50 text-[20px] text-center"
                        initial={{
                            translateX: -50,
                            opacity: 0
                        }}
                        animate={{
                            translateX: 0,
                            opacity: 1
                        }}
                        transition={ transition }
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorem fugit quidem natus exercitationem unde, cupiditate ipsam iusto itaque nam, suscipit cumque laborum porro sunt minima dignissimos impedit. Non, quisquam?</motion.p>
                    <Button variant="secondary" asChild>
                        <Link href="/products">Shop Now</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero