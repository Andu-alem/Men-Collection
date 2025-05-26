import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest,{ params }:{ params:{ id: string[] } }) {
    try {
        //const searchParams = request.nextUrl.searchParams   
        const { id } = await params

        const prisma = new PrismaClient()
        const category = await prisma.category.findFirstOrThrow({
            where: {
                id: parseInt(id[0])
            },
            include: {
                products: { 
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        imagePath: true,
                        quantity: true
                    }
                }
            }
        })

        return NextResponse.json({ category: category })
    } catch(e) {
        return NextResponse.json({ error: e })
    }
}