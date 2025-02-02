import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main () {
    const categories = ["Casual Clothings", "Ties", "Shirts", "Sun glasses", "Shoes", "Suits", "Perfumes", "Watches"]
   
    categories.forEach(async (category) => {
        const newCategory = await prisma.category.create({
            data: {
                name: category
            }
        })

        Array.from(Array(5)).forEach(async (item) => {
            await prisma.product.create({
                data: {
                    name: 'Product Name',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis accusamus vel assumenda alias velit impedit, asperiores possimus delectus necessitatibus culpa repellat! Magni commodi quidem labore ratione sapiente corrupti dicta?',
                    price: 232.44,
                    quantity: 3,
                    imagePath: "/watches.jpg",
                    categoryId: newCategory.id
                }
            })
        })

    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        // handle error here
        console.log("Error occured", e)
        await prisma.$disconnect()
        
    })