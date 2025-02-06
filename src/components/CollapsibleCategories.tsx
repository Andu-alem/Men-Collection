'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
} from '@/components/ui/collapsible'
import { Skeleton } from '@/components/ui/skeleton'
import { 
    ChevronDown
} from 'lucide-react'
import { getAllCategories } from '@/lib/queries'
import { ScrollArea } from '@/components/ui/scroll-area';

type Category = {
    id: number,
    name: string
}

export default function CollapseCategory({ admin=false }) {
    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        async function getData() {
            const response = await getAllCategories()
            if (response.categories) {
                setCategories(response.categories)
            }
        }
        getData()
    },[])


    return (
        <Collapsible className="group/collapsible">
            <CollapsibleTrigger className="w-full flex justify-between hover:bg-gray-50 py-2 px-1">
                <span className="text-[17px]">Filter by Category</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-gray-400" />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    categories.length < 1 ?
                    (
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-full rounded-md" />
                            <Skeleton className="h-5 w-full rounded-md" />
                            <Skeleton className="h-5 w-full rounded-md" />
                        </div>
                    ) : (
                        <ScrollArea className="h-[57vh]">
                            <div className='flex flex-col gap-2'>
                                {
                                    categories.map((category) => (
                                        <Link href={`${ admin ? '/admin/category':'/category'}/${category.id}`} key={ category.id }>{ category.name }</Link>
                                    ))
                                }
                            </div>
                        </ScrollArea>
                    )
                }
            </CollapsibleContent>
        </Collapsible>
    )
}