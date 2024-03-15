const express = require("express");
const router = express.Router();

// require('../db/connection')
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
});

// Using promises
/*
router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if(!name || !email || !phone || !work || !password || !cpassword){
    return res.status(422).json({error: "Please fill the field properly"});
  }
  User.findOne({email:email})
  .then((userExist)=>{
    if(userExist){
        return res.status(422).json({error: "Email already exist"});
    }
    const user = new User({name, email, phone, work, password, cpassword});
    user.save().then(()=>{
        res.status(201).json({message: "User registered successfully"});
    }).catch((err)=>
        res.status(500).json({error:"Failed to register"}));
  }).catch(err=>{console.log(err);});
});
*/
//Using async-await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }
    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();
      res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
