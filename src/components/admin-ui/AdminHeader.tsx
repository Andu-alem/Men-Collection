'use client'
import Link from 'next/link'
import HeaderElement from './HeaderElement'
import { MenuIcon } from 'lucide-react'
import { 
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle
} from '@/components/ui/sheet'
import AddCategory from './AddCategory'
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
} from '@/components/ui/collapsible'
import { 
    ChevronDown
} from 'lucide-react'
import CollapseCategory from '../CollapsibleCategories'


export default function AdminHeader() {

    return (
        <div className="sm:hidden sticky top-0 z-50 bg-gray-50 w-full flex gap-7 py-3 px-5 mb-2">
            <Sheet>
                <SheetTrigger><MenuIcon /> </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Admin Actions</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col mt-4">
                        <Link href="/admin/create" className="text-[17px] hover:bg-gray-50 py-2 px-1">Create New Product</Link>
                        <Collapsible className="group/collapsible">
                            <CollapsibleTrigger className="w-full flex justify-between hover:bg-gray-50 py-2 px-1">
                                <span className="text-[17px]">Create New Category</span>
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-gray-400" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <AddCategory />
                            </CollapsibleContent>
                        </Collapsible>
                        <CollapseCategory admin={ true } />
                    </div>
                </SheetContent>
            </Sheet>
            <HeaderElement />
        </div>
    )
}