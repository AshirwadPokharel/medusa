const mongoose = require("mongoose")

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/calculator")
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection failed:", error)
  }
}
