'use client'
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import {
    SunIcon,
    MoonIcon
} from "lucide-react"

export default function ModeToggle() {
    const [dark, setDark] = useState(false)
    const theme = useTheme()
    return (
        <Button variant="ghost" asChild>
            {
                dark ? (
                    <SunIcon className="w-12 h-12" onClick={ () => {
                        theme.setTheme("light")
                        setDark(false)
                    }}/>
                ) : (
                    <MoonIcon className="w-12 h-12" onClick={ () => {
                        theme.setTheme("dark")
                        setDark(true)
                    }} />
                )
            }
        </Button>
    )
}