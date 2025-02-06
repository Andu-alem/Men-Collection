export async function getCategories() {
    const response = await fetch("http://localhost:3000/api/categories")
    
    return response.json()
}

export async function getProducts(searchParams:any) {
    let url = ''
    const { page, name, category } = await searchParams

    if (name) {
        if (page) {
            url = `search?name=${name}&page=${page}`
        } else {
            url = `search?name=${name}`
        }
    } else if (category) {
        if (category) {
            if (page) {
                url = `categories/${category}?page=${page}`
            } else {
                url = `categories/${category}`
            }
        }
    } else {
        url = `products?page=${page}`
    }
    const response = await fetch(`http://localhost:3000/api/${url}`)
    
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