import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    try {
        //const searchParams = request.nextUrl.searchParams
        let currentPage = 1
        let offset = 0
        let limit = 10
        const url = new URL(request.url)
        const page = url.searchParams.get("page")
        const name = url.searchParams.get("name")
        if (!name) throw new Error("No search parameter")
        if (page) {
            currentPage = parseInt(page)
            offset = (currentPage-1) * limit
        }
        const prisma = new PrismaClient()
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            },
            skip: offset,
            take: limit,
        })
        
        const totalProducts = await prisma.product.count()
        const totalPages = Math.ceil(totalProducts/10)
        const hasNext = currentPage < totalPages
        const hasPrev = currentPage > 1

        return NextResponse.json({
            products: products,
            meta: {
                totalPages,
                currentPage,
                hasNext,
                hasPrev
            }
        })
    } catch(e) {
        return NextResponse.json({ error: e })
    }
}