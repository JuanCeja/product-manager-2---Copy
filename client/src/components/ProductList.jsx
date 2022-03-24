import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProductList = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data)
        })
        .catch()
    }, [props.refresh])

    return (
        <div>
            <h3>All Products:</h3>
            {
                products.map((product, idx) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}><h5>{ product.title }</h5></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList