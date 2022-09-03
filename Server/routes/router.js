const express = require('express')
const router = express.Router()
const userRegistration = require('../model/user')
const bcrypt = require('bcrypt')


router.post('/register', async(req,res) => {
    
       
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const signup = new userRegistration({
        username: req.body.username,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password: securePassword,
        confirm: req.body.confirm

    })
    signup.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });
module.exports = router