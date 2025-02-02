import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest,{ params }:{ params:{ id: string[]} }) {
    try {
        //const searchParams = request.nextUrl.searchParams   
        const { id } = await params
        
        const prisma = new PrismaClient()
        const product = await prisma.product.findFirstOrThrow({
            where: {
                id: parseInt(id[0])
            },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                quantity: true,
                imagePath: true
            }
        })

        return NextResponse.json({ product: product })
    } catch(e) {
        return NextResponse.json({ error: e })
    }
}