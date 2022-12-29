const ModelProduct = require("../model/Product")

async function register(req, res){
  try {

    const {product, desc, valueProduct, available} = req.body

    const productRegister = await ModelProduct.create({
        product,
        desc,
        valueProduct,
        available
    })

    return res.status(200).json(productRegister)

    
  } catch (error) {
     return res.status(500).json(error)
  }
}

async function list(req, res){
  try {
    
  const listProducts = await ModelProduct.find().sort({valueProduct: 1})

  return res.status(200).json(listProducts)

  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports ={
  register,
  list,
}