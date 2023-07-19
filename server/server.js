const express = require('express');
const app = express();
require('dotenv').config();
const port = 8000

require('./config/mongoose.config');
const cors = require('cors')

app.use(express.json(), express.urlencoded({ extended: true}));
app.use(cors());


const routeAttacher = require('./routes/product.route');
routeAttacher(app);

app.listen(port, () => console.log("SERVER ONLINE"));


// const mongoose = require('mongoose');
