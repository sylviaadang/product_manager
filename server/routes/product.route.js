const productController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', productController.getAllProduct);

    app.get('/api/products/:id', productController.getOneProduct);

    app.put('/api/products/:id', productController.updateProduct);

    app.post('/api/products', productController.createProduct);

    app.delete('/api/products/:id', productController.deleteProduct);
}
