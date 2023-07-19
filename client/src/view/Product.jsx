import React, { useEffect, useState } from 'react';
import { useParams , Link} from 'react-router-dom';
import axios from 'axios';

const Product = () => {

    const {id} = useParams();

    const [product, setProduct] = useState({});

    const getOne = () => {
        console.log("I am here")
        console.log(`${id}`)
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(getOne, [])


    return (
        <div>
            <h2>Title: {product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
            <Link to={`/products/edit/${id}`}>Update</Link>

            <Link to={'/products'}>Back to Dashboard</Link>
        </div>
    )
}

export default Product
