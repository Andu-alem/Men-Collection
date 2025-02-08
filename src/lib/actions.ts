'use server'
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"
import { put } from "@vercel/blob"
import { CartItem } from "@/stores/store"

export const addProduct = async (formData:FormData) => {
    let productId:number;
    const prisma = new PrismaClient()
    try{
        console.log("just inside Blob url is 0000===   ")
        const categoryId = parseInt(formData.get("category") as string)
        const name = formData.get("name") as string
        const description = formData.get("description") as string
        const price = parseFloat(formData.get("price") as string)
        const quantity = parseInt(formData.get("quantity") as string)
        const image = formData.get("image") as File
        console.log("beforre Blob url is 0000===   ")

        //put the image file in vercel blob store and get url
        const fileName = `${Date.now()}-${image.name}`
        console.log("image name Blob url is 0000===   ", fileName)
        const blob = await put(`products/${fileName}`, image, { access: 'public'})
        const url = blob.url
        console.log("Blob url is 0000===   ", url)
        //const imagePath = await upload(image)

        const product = await prisma.product.create({
            data: {
                categoryId: categoryId,
                name,
                description,
                price,
                quantity,
                imagePath: url
            }
        })
        productId = product.id
    } catch (e) {
        return {
            error: true,
            message: e
        }
    }
    revalidatePath('/products')
    redirect(`/admin/product/${productId}`)
}

export const updateProduct = async () => {

}

export const deleteProduct = async (id:number) => {
    const prisma = new PrismaClient()
    try {
        await prisma.product.delete({
            where: {
                id: id
            }
        })
    } catch (e) {
        return {
            error: true,
            message: e
        }
    }
    revalidatePath('/products')
    return {
        error: false
    }
}

export const addCategory = async (formData:FormData) => {
    const prisma = new PrismaClient()
    try {
        const name = formData.get("name") as string
        if (!name) throw new Error("No name to create the category")

        const category = await prisma.category.create({
            data: {
                name: name
            }
        })
        return {
            error: false,
            category
        }
    } catch (e) {
        prisma.$disconnect()
        return { 
            error: true,
            message: e 
        }
    }
}

export const updateCategory = async () => {

}


export const addOrder = async (cart:CartItem[], userId:string) => {
    const prisma = new PrismaClient()
    try {
        const order = await prisma.order.create({
            data: {
                userId,
                products: {
                    create: cart.map((item) => ({
                        productId: item.product.id,
                        quantity: item.quantity
                    }))
                }
            },
            include: {
                products: true
            }
        })
        await prisma.$disconnect()
        return {
            error: false,
            order: order
        }

    } catch(e) {
        await prisma.$disconnect()
        return {
            error: true,
            message: e
        }
    }

}