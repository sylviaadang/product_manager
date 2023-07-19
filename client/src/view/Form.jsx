import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Form = (props) => {

    // const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        price:  0,
        description: ""
    })


    const handleChange = (e) => {
        const {name , value} = e.target
        setFormData(currentData => ({...currentData, [name]: value}))

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/products", formData)
            .then(res => {
                setFormData({
                    title: res.data.title,
                    price:  res.data.price,
                    description: res.data.description
                }, console.log(res.data))
                props.fetchProducts()
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
                <button>Add</button>

            </form>
        </div>
    )
}

export default Form
