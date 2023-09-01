const express = require('express');
const router = express.Router();
const productModel= require('../models/productModel');

// api to save user data
router.post('/products/savedata', (req, res) => {  //express ko yauta method ho call back function
    const data=req.body;  //html body
    if (!data) {
        res.status(400).json({ msg: 'Data not found' });
        return;
    }
    const product = new productModel({ // User (user model ho)
        name: data.name,
        categories: data.categories,
        price: data.price,
        details: data.details,
        // age:data.age,
        // contactNumber: data.contactNumber,


    });

    product.save().then(( data) => {
        res.json({ msg: 'Data inserted', success: true ,data});
        console.log(data);
    }
    ).catch((error) => {
        res.status(500).json({ msg: error, success: false });
    }
    );
});


// api to get all user data


module.exports = router;

