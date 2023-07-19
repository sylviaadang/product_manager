import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Form from './Form';

const List = () => {

    // const {id} = useParams();

    const [products, setProducts] = useState([])

    const fetchProducts = () => {

        axios.get("http://localhost:8000/api/products")
            .then(res => {setProducts(res.data)
                console.log(res.data)})
            .catch(err => console.log(err))
    }

    useEffect(fetchProducts, [])

    const handleDelete = (id) => {
        alert(`This would delete ${id}`)
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=> fetchProducts())
            .catch(err=> console.log(err))
    }




    return (
        <div>
            <Form fetchProducts={fetchProducts}/>
            <h2>All Products:</h2>
            <ul>
                {
                    products.length > 0 ?

                        products.map((product, key) => {
                            return <div key={key}>
                                <Link to={`/products/${product._id}`}><h2>{product.title}</h2></Link>
                                <button onClick={() => handleDelete(product._id)}>DELETE</button>
                            </div>
                        })
                        :
                        <p>No products in database</p>

                }
            </ul>
        </div>
    )
}

export default List
