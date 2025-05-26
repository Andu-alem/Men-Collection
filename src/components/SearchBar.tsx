import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"

export default function Search() {
    return (
        <div className="flex items-center gap-2">
            <Input type="text" className="text-[15px]" placeholder="Search by name" />
            <SearchIcon size="30" />
        </div>
    )
}