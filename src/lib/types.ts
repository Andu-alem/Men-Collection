
export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    imagePath: string
}

export type Category = {
    id: number,
    name: string
}

export type Meta = {
    totalPages: number,
    currentPage: number,
    hasNext: boolean,
    hasPrev: boolean
}