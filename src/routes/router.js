const router = require("express").Router()
const ControllerProduct = require("../controller/Product")


router.post("/product", ControllerProduct.register)

module.exports = router

