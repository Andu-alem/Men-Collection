'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
    duration: number,
    children: ReactNode,
    className?: string
}

const FadeInAnimation = ({ duration, children, className='' }:Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: duration,
                delay: 0.5
            }}
            className={ className }
        >
            { children }
        </motion.div>
    )
}

export default FadeInAnimation