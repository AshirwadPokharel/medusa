const path = require("path")

module.exports = {
  load: (container) => {
    const router = require("express").Router()
    require("./routes/calculator")(router)
    container.resolve("app").use("/calculator", router)
  },
}
