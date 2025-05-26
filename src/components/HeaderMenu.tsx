'use client'
import { MenuIcon } from 'lucide-react'
import { 
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from '@/components/ui/sheet'
import CollapseCategory from './CollapsibleCategories'
import PriceRangeSlider from './PriceRangeSlider'


export default function HeaderMenu() {
    return (
        <div className="sm:hidden">
            <Sheet>
                <SheetTrigger className="mt-1"><MenuIcon /> </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Additional Filters</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-2 mt-4">
                        <PriceRangeSlider />
                        <CollapseCategory />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}