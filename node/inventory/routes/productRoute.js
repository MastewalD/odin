const {Router} = require("express")
const productController = require("../controllers/productController")
const router = Router()
router.get("/search/",productController.searchProduct)
router.get("/",productController.getAllProduct)
router.get("/detail/:id",productController.productDetail)
router.get("/create",productController.getCreateProductPage)
router.post("/create",productController.createProduct)
router.get("/update/:id",productController.getUpdateProductPage)
router.post("/update/:id",productController.updateProduct)
router.post("/delete/:id",productController.deleteProduct)


module.exports = router