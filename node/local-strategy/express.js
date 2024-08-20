const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
require("dotenv").config();
const flash = require("express-flash");
const app = express();
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.json());
app.use(flash());
const userModel = require("./models/userModels");
const passport = require("./config/passport")
const {connectDB} = require("./config/db")
const PORT = process.env.PORT;
connectDB().then(()=>{
    console.log("db connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
})
.catch((err) => {
    console.error('Error connecting to database:', err);
});
const store=new MongoStore({
    mongoUrl: process.env.DB,
    collectionName: 'sessions',
})
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store:store,
    cookie:{maxAge:1000*60*60*24*7}
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.get("/",(req,res)=>{
    res.render("index",{title:"home"})
})
app.get("/user/create",(req,res)=>{
    res.render('signup',{title:"register"})
})
app.get("/user/login",(req,res)=>{
    res.render("signin",{title:"login"})
})
app.get("/home", isAuthenticated, (req, res) => {
    res.render("home", { title: "hello" });
  });
app.get("/maste", isAuthenticated,(req,res)=>{
  res.render("maste",{title:"maste"})
})
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/user/login");
  }
app.post("/user/login",
    (req, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          console.error("Authentication Error:", err);
          req.flash("error", "An error occurred during authentication");
          return next(err);
        }
        if (!user) {
          req.flash("error", info.message);
          return res.redirect("/user/login");
        }
        req.logIn(user, (err) => {
          if (err) {
            console.error("Authentication Error:", err);
            req.flash("error", "An error occurred during authentication");
            return next(err);
          }
          return res.redirect("/home");
        });
      })(req, res, next);
    }
  );
  app.post("/user/login",(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
      if(err){
        console.log('error occured when authenticate user')
        return next(err)
      }
      if(!user){
        console.log("user not found")
        return res.redirect("/user/login")
      }
      req.logIn(user,(err)=>{
        if(err){
          return next(err)
        }
        return res.redirect("/home")
      })
    })(req,res.next)
  })
  app.post("/user/create", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.redirect("/user/login");
  });
app.post("/user/logout",(req,res)=>{
  req.session.destroy((err)=>{
    if(err){
      console.log(`error occured on the session ${err}`)
      res.status(500).send('error occured on the server')
    }
    res.clearCookie('connect.sdi')
    res.redirect("/user/login")
  })
  
})