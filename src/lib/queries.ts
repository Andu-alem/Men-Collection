'use server'
import { cache } from "react"
import prisma from "./prisma"

export const getAllProducts = cache(async (page:string = '1', name:string|undefined=undefined) => {
    try {
        let products = []
        let totalProducts = 0
        const limit = 12
        const currentPage = (Number.isNaN(page) || parseInt(page) < 1) ? 1 : parseInt(page)
        const offset = (currentPage-1) * limit

        if (name) {
            // if there is a search by name parameter
            products = await prisma.product.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                },
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
            totalProducts = await prisma.product.count({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            })
        } else {
            products = await prisma.product.findMany({
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
            totalProducts = await prisma.product.count()
        }

        const totalPages = Math.ceil(totalProducts/limit)
        const hasNext = currentPage < totalPages
        const hasPrev = currentPage > 1

        return {
            error: false,
            products,
            meta: {
                totalPages,
                hasNext,
                hasPrev,
                currentPage
            }
        }
    } catch (e) {
        return {
            error: true
        }
    }
})

export const getProductById = cache(async (id:string) => {
    try {
        const product = await prisma.product.findFirstOrThrow({
            where: {
                id: parseInt(id)
            }
        })

        return {
            product
        }
    } catch (e) {
        return {
            error: true
        }
    }
})

export const getProductsByCategory = cache(async (id:string) => {
    try {
        const category = await prisma.category.findFirstOrThrow({
            where: {
                id: parseInt(id)
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

        return {
            error: false,
            products: category.products
        }
    } catch (e) {
        return {
            error: true
        }
    }
})

export const getAllCategories = async () => {
    try {
        const categories = await prisma.category.findMany()
        return {
            categories: categories
        }
    } catch(e) {
        return {
            error: true,
        }
    }
}