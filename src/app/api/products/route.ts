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
        if (page && !Number.isNaN(parseInt(page))) {
            currentPage = parseInt(page)
            offset = (currentPage-1) * limit
        }
        
        const prisma = new PrismaClient()
        const products = await prisma.product.findMany({
            skip: offset,
            take: limit,
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                quantity: true,
                imagePath: true
            }
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