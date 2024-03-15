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
//login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in the data" });
    }
    const userLogin =await User.findOne({ email: email });
    console.log(userLogin);
    if(!userLogin){
      res.status(400).json({error:"user error"});
    }else{
      res.json({message:"User signin successfully"});
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
