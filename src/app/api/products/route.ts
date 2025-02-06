import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import fs from 'fs'
import path from 'path'
import { put } from '@vercel/blob'

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
            },
            orderBy: {
                createdAt: "desc"
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

async function upload(file:File): Promise<string> {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir,{
            recursive: true
        })
    }
    const fileName = `${Date.now()}-${file.name}`
    const filePath = path.join(uploadDir, fileName)

    const buffer = Buffer.from(await file.arrayBuffer())
    fs.writeFileSync(filePath, buffer)

    return `/uploads/${fileName}`
}

export async function POST(request:NextRequest) {
    try{
        const formData = await request.formData()

        const categoryId = parseInt(formData.get("category") as string)
        const name = formData.get("name") as string
        const description = formData.get("description") as string
        const price = parseFloat(formData.get("price") as string)
        const quantity = parseInt(formData.get("quantity") as string)
        const image = formData.get("image") as File

        //put the image file in vercel blob store and get url
        //const fileName = `${Date.now()}-${image.name}`
        //const blob = await put(`products/${fileName}`, image, { access: 'public'})
        //const url = blob.url
        const imagePath = await upload(image)

        const prisma = new PrismaClient()

        const product = await prisma.product.create({
            data: {
                categoryId: categoryId,
                name,
                description,
                price,
                quantity,
                imagePath
            }
        })

        return NextResponse.json({
            product: product,
        },{
            status: 201
        })
    } catch (e) {
        return NextResponse.json({
            error: "Error while creating product."
        }, {
            status: 500
        })
    }
}