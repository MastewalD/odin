const {Router} = require('express')
const categoryController = require("../controllers/categoryController")
const router = Router()

router.get("/",categoryController.getAllCategory)
router.get("/detail/:id",categoryController.categoryDetail)
router.get("/create",categoryController.getCreateCategoryPage)
router.post("/create",categoryController.createCategory)
router.get("/update/:id",categoryController.getUpdateCategoryPage)
router.post("/update/:id",categoryController.updateCategory)
router.post("/delete/:id",categoryController.deleteCategory)


module.exports = router