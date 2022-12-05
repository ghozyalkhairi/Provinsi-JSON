const express = require("express")
const app = express()
const cors = require("cors")
const data = require("./data/provinces.json")

app.use(cors())

app.get("/", (req, res) => {
  res.json(data)
})

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Server is running at port 3000")
})

module.exports = app
