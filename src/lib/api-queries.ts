export async function getCategories() {
    const response = await fetch("http://localhost:3000/api/categories")
    
    return response.json()
}

export async function getProducts(searchParams:any) {
    const { page } = await searchParams
    const response = await fetch(`http://localhost:3000/api/products?page=${page}`)
    
    return response.json()
}

export async function getProductById(params:{ id: string[]}) {
    const { id } = await params
    const response = await fetch(`http://localhost:3000/api/products/${id[0]}`)

    return response.json()
}
export async function getProductByCategory(id:number) {    
    const response = await fetch(`http://localhost:3000/api/categories/${id}`)

    return response.json()
}