const Product = require('../models/product.model');

module.exports.getAllProduct = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneSingleProduct => {
            res.json(oneSingleProduct)
        })
        .catch ((err) => {
            console.log(err)
        });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
            console.log(req.body)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then (updateProduct => {
            res.json(updateProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }


module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then( result => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        });
}
