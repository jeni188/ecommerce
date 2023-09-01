const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// api to save user data
router.post('/users/savedata', (req, res) => {  //express ko yauta method ho call back function
    const data = req.body;  //html body
    if (!data) {
        res.status(400).json({ msg: 'Data not found' });
        return;
    }
    const user = new User({ // User (user model ho)
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        age: data.age,
        contactNumber: data.contactNumber,


    });

    user.save().then((data) => {
        res.json({ msg: 'Data inserted', success: true, data });
    }
    ).catch((error) => {
        res.status(500).json({ msg: error, success: false });
    }
    );
});


// api to get all user data
router.get("/users/getdata/id", (req, res) => {
    User.find()
        .then((data) => {
            res.json({ msg: "Data fetched", success: true, data });

        })
        .catch((error) => {
            res.status(500).json({ msg: error, success: false });
        })
});

//api to get all users using async and await

router.get("user/getdata/", async (req, res) => {

    try {
        const users = await User.find();
        res.json({ msg: "data fetched successfully", success: true, users })

    }
    catch (err) {
        res.status(500).json({ msg: err, success: false })
    }
});

//api to get user data by id

router.get("/users/getdata/:id", (req, res) => {
    User.findById(req.params.id)
        // User.find()
        .then((data) => {
            res.json({ msg: "Data fetched", success: true, data });

        })
        .catch((error) => {
            res.status(500).json({ msg: error, success: false });
        })
});

//api to update user data by user id also use asyncs await

router.put("/users/update/:id", async (req, res) => {
    const data = req.body;
    const user = await User.findById(req.params.id);
    if (!data) {
        res.status(400).json({ msg: "Data not found" });
        return;
    }
    if (!user) {
        res.sendStatus(400), json({ msg: "Data not found" });
        return;
    }
    try {
        user.name = data.name ? data.name : user.name; //tarnary operation 
        user.email = data.email ? data.email : user.email;
        user.password = data.password ? data.password : user.password;
        user.role = data.role ? data.role : user.role;
        user.age = data.age ? data.age : user.age;
        user.contactNumber = data.contactNumber ? data.contactNumber : user.contactNumber;
        const updatedUser = await user.save();
        res.json({ msg: "Data updated", success: true, updatedUser });
    } catch (error) {
        res.status(500).json({ msg: error, success: false });
    }
});


module.exports = router;