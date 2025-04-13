import { useEffect, useState } from "react"
import './Products.css'

const Products = () => {
    const [products, setproducts] = useState([])


    const url = import.meta.env.VITE_API_URL||"http://localhost:5000" // Use the environment variable for the API URL

    // || 'http://localhost:5000/'

    useEffect(() => {
        console.log("API URL:", url);
        fetch(`${url}/products`).then((res) => res.json()).then((data) => {
            setproducts(data)
        }).catch((err) => {
            console.log(err)
        })
        console.log(products)
    }, [])
    return (
        <>
            <section className="product-hero" id="Products">
                <h1 className="d-flex justify-content-center">Our Products</h1>
                <p style={{ textAlign: "center" }}>Browse through our range of high-quality networking devices and accessories.</p>
            </section>
            <div className="product-list">
                {
                    products.map((product, index) => (
                        <div key={index} className="products">
                            <img src={product.image} className="w-100" />
                            <p>{product.name}</p>
                            <p>{product.description}</p> {/* Display product description */}
                            <p>Price: ${product.price}</p> {/* Display product price */}
                            <button className="btn btn-primary">Enquire Now</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products
