'use client'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from './ui/pagination'
import { Meta } from '@/lib/types'
import { useSearchParams } from 'next/navigation'

export default function PaginationSection({ meta }:{ meta:Meta }) {
    const { totalPages, currentPage, hasNext, hasPrev } = meta
    const param = useSearchParams()

    return (
        <Pagination>
            { hasPrev && <PaginationPrevious href={`?page=${currentPage-1}`} />}
            <PaginationContent className="hidden sm:flex">
                {
                    Array.from(Array(totalPages)).map((i, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink isActive={ (index+1) === currentPage } href={`${ param.get("name") ? `?name=${param.get("name")}&`:`?` }page=${index+1}`}>{ index+1 }</PaginationLink>
                        </PaginationItem>
                    ))
                }
            </PaginationContent>
            { hasNext && <PaginationNext href={`?page=${currentPage+1}`} />}
        </Pagination>
    )
}