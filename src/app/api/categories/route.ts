import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"

export async function GET(request: NextRequest) {
    try {
        const prisma = new PrismaClient()
        const categories = await prisma.category.findMany()

        return NextResponse.json({ categories: categories })
    } catch(e) {
        return NextResponse.json({ error: e })
    }
}