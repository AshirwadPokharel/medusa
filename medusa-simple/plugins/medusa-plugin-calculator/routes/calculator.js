const CalculatorService = require("../services/calculator-service")

module.exports = (router) => {
  router.post("/", async (req, res) => {
    const { operand1, operand2, operation } = req.body

    try {
      const result = await CalculatorService.calculate(operand1, operand2, operation)
      res.json(result)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  })

  router.get("/history", async (req, res) => {
    const Calculation = require("../models/calculation")
    const history = await Calculation.find().sort({ createdAt: -1 }).limit(10)
    res.json(history)
  })
}
