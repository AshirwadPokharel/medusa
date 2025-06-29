const path = require("path")

module.exports = {
  projectConfig: {
    database_url: "mongodb://localhost:27017/calculator",
    database_type: "mongo",
  },
  plugins: [
    {
      resolve: path.resolve(__dirname, "plugins", "medusa-plugin-calculator"), // ✅ correct!
      options: {},
    },
  ],
}
