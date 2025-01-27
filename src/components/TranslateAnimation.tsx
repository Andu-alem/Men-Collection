'use client'
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
    duration: number,
    children: ReactNode,
    className?: string
}

const TranslateAnimation = ({ duration, children, className='' }:Props) => {
    return (
        <motion.div
            initial={{
                y: 200,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: duration,
                delay: 0.3
            }}
            className={ className }
        >
            { children }
        </motion.div>
    )
}

export default TranslateAnimation