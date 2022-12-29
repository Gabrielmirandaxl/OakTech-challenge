const router = require("express").Router()
const ControllerProduct = require("../controller/Product")


router.post("/product", ControllerProduct.register)
router.get("/products", ControllerProduct.list)

module.exports = router

