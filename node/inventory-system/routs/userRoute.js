const express = require("express")
const userRoutes = require("../controller/user")
const route = express.Router()

route.get("/",userRoutes.getAllUser)
route.get("/detail/:id",userRoutes.getDetail)
route.get("/create",userRoutes.getCreatePage)
route.post("/create",userRoutes.createUser)
route.get("/update/:id",userRoutes.getUpdateUser)
route.post("/update/:id",userRoutes.updateUser)
route.post("/delete/:id",userRoutes.deleteUser)

module.exports = route