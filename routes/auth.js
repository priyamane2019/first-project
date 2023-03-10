const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");
require('../db/conn');
router.use(cookieParser());
const User = require("../model/userSchema")
const authenticate =require("../middleware/Authenticate");
router.get("/", (req, res) => {
    res.send("Hello world home from server server router");
})
/////Using Promises

router.post("/register", (req, res) => {
    const { name, email, phone, address, password, cpassword } = req.body;
  
    // console.log(name);
    if (!name || !email || !phone || !address || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the feild properly " });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "User Already Exist" });
            }

            else if (password != cpassword) {
                return res.status(422).json({ error: "password Should match" });
            }
            else {

                //name:name not need .. left name is from db and right name is from userentry
                const user = new User({ name, email, phone, address, password, cpassword })
                //bcrypt password in shema file
                user.save().then(() => {
                    res.status(201).json({ message: "user registartaion successfully" })
                }).catch((err) => res.status(500).json({ error: "Failed to register" }))
            }
        }).catch(err => {
            console.log(err);
        })
})

router.post("/login", (req, res) => {
    let token;
    const { email, password } = req.body;
    //res.json({message:"loginnnn"})
    
    if (!email || !password) {
        return res.status(400).json({ error: "Plz filled the feild properly " });
        alert("Password should match");
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {

                bcrypt.compare(password, userExist.password, (err, isValid) => {

                    token = userExist.generateAuthToken();
                 //   console.log("Tokem is ", token);
                
                    res.cookie("jwtoken", token, {
                        expires:new Date(Date.now() +2589000000),
                        httpOnly:true
                    });
                    if (isValid) {
                        return res.status(200).json({ message: "login Successfully" });
                    }
                    else {
                        return res.status(400).json({ error: "Error Crediential" });
                        
                    }
                })
            }
            else {
                return res.status(400).json({ error: "user error plz create account" });
            }



        })
})

router.get("/about", authenticate , (req, res) => {
    res.send(req.rootUser);

})

module.exports = router;

//using Async Awit
// router.post("/register", async (req, res) => {
//     const { name, email, phone, address, password, cpassword } = req.body;

//     // console.log(name);
//     if (!name || !email || !phone || !address || !password || !cpassword) {
//         return res.status(422).json({ error: "Plz filled the feild properly " });
//     }
//     try {

//         const userExist = await User.findOne({ email: email })

//         if (userExist) {
//             return res.status(422).json({ error: "User Already Exist" });
//         }

//         const user = new User({ name, email, phone, address, password, cpassword });

//         const userRegister = await user.save();
//         console.log(`${user} user register successfulyy`);
//         console.log(userRegister);
//         res.status(201).json({ message: "user registartaion successfully" });

//     } catch (err) {
//         console.log(err);
//     }
// })
