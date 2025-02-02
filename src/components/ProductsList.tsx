import ProductCard from "./ProductCard"

const ProductsList = () => {
    return (
        <div className="grid grid-cols-4 gap-3">
            {
                Array.from(Array(20)).map((item, index) => (
                    <ProductCard key={ index } />
                ))
            }
        </div>
    )
}

export default ProductsList