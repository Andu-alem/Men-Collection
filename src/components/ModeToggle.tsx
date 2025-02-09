'use client'
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import {
    SunIcon,
    MoonIcon
} from "lucide-react"

export default function ModeToggle() {
    const theme = useTheme()
    return (
        <Button variant="ghost" asChild>
            {
                theme.theme == "dark" ? (
                    <SunIcon className="w-12 h-12" onClick={ () => theme.setTheme("light")}/>
                ) : (
                    <MoonIcon className="w-12 h-12" onClick={ () => theme.setTheme("dark")} />
                )
            }
        </Button>
    )
}