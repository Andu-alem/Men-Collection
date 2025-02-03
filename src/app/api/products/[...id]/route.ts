import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

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

        return NextResponse.json({ product: product }, { status: 200 })
    } catch(e) {
        return NextResponse.json({ error: e },{ status: 500 })
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

export async function POST(request:NextRequest,{ params }:{ params:{ id: string[]} }) {
    try{
        const { id } = await params
        const formData = await request.formData()

        const name = formData.get("name") as string
        const description = formData.get("description") as string
        const price = parseFloat(formData.get("price") as string)
        const quantity = parseInt(formData.get("quantity") as string)
        const image = formData.get("image") as File

        const imagePath = await upload(image)

        const prisma = new PrismaClient()

        const product = await prisma.product.update({
            where: {
                id: parseInt(id[0])
            },
            data: {
                name,
                description,
                price,
                quantity,
                imagePath
            }
        })

        return NextResponse.json({
            product: product
        },{
            status: 201
        })
    } catch (e) {
        return NextResponse.json({
            error: "Error while updating product."
        }, {
            status: 500
        })
    }
}


export async function DELETE(request:NextRequest,{ params }:{ params:{ id: string[]} }) {
    try {
        const { id } = await params
        const prisma = new PrismaClient()

        await prisma.product.delete({
            where: {
                id: parseInt(id[0])
            }
        })

        return NextResponse.json({
            message: "Product deleted successfuly"
        },{
            status: 200
        })
    } catch (e) {
        return NextResponse.json({
            error: "Error while deleting product."
        }, {
            status: 500
        })
    }
}