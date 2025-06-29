const Calculation = require("../models/calculation")

class CalculatorService {
  static async calculate(operand1, operand2, operation) {
    let result

    switch (operation) {
      case "add":
        result = operand1 + operand2
        break
      case "subtract":
        result = operand1 - operand2
        break
      case "multiply":
        result = operand1 * operand2
        break
      case "divide":
        result = operand2 !== 0 ? operand1 / operand2 : null
        break
      default:
        throw new Error("Invalid operation")
    }

    const calc = new Calculation({
      operand1,
      operand2,
      operation,
      result,
    })

    await calc.save()

    return calc
  }
}

module.exports = CalculatorService
