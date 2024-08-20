const passport= require("../config/passport")
const {Router} = require("express")
const userControllers = require("../controllers/userControllers")
const routes = Router()

routes.get("/create", userControllers.getCreateUserPage)
routes.post("/create", userControllers.createUser)

routes.get("/login", userControllers.getUserLoginPage)
routes.post('/login', userControllers.loginUser)

module.exports = routes