const mongoose = require("mongoose")

const schema = new mongoose.Schema({
 product: {
  type: String,
  required: true,
 },
 desc: {
  type: String,
  required: true,
 },
 valueProduct: {
  type: Number,
  required: true,
 },
 available: {
  type: String,
  enum: ["sim", "não"],
  required: true,
 }

}, {
  timestamps: true,
})

const model = mongoose.model("products", schema)

module.exports = model