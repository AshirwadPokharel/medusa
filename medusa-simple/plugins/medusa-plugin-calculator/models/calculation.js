const mongoose = require("mongoose")

const CalculationSchema = new mongoose.Schema({
  operand1: Number,
  operand2: Number,
  operation: String,
  result: Number,
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Calculation", CalculationSchema)
