module.exports = async ({ container }) => {
  const mongooseLoader = require("./mongoose")
  await mongooseLoader()

  console.log("🧠 Custom loaders initialized")
}
//console.log
