import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import Form from './Form';

const Edit = () => {

    const {id} = useParams()
    console.log(id)
    const navigator = useNavigate()

    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(currentData => ({ ...currentData, [name]: value }))
    }

    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:8000/api/products/${id}`)

            .then(res => {
                console.log("i am here")

                setFormData(res.data)
                console.log(res.data.id)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id)
        axios.put(`http://localhost:8000/api/products/${id}`, formData)
            .then(res => {
                navigator("/products")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" value={formData.title} onChange={handleChange}/>
                <br/>
                <label>Price: </label>
                <input type="number" name="price" value={formData.price} onChange={handleChange}/>
                <br/>
                <label>Description: </label>
                <input type="text" name="description" value={formData.description} onChange={handleChange}/>
                <br/>
                <input type="hidden" value={id}/>
                <button>Update</button>

            </form>
        </div>
    )
}


export default Edit
