'use client'
import { useRouter } from "next/navigation"
import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"
import { useState } from "react"

export default function Search() {
    const router = useRouter()
    const [searchParam, setSearchParam] = useState('')

    const handleSeaarch = () => {
        if (searchParam === '') return
        router.push(`?name=${searchParam}`)
        router.refresh()
    }

    return (
        <div className="flex items-center gap-2">
            <Input 
                type="search" 
                className="text-[13px] border-zinc-300" 
                placeholder="Search by name"
                onChange={ (e) => setSearchParam(e.target.value)}
            />
            <SearchIcon size="30" className="cursor-pointer hover:text-orange-500" onClick={ handleSeaarch } />
        </div>
    )
}