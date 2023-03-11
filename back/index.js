const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { connectDb } = require("./db/db")
const cookieParser = require("cookie-parser")

const app = express()

dotenv.config({ path: "./.env" })
const port = process.env.PORT || 8000

app.use((req, res, next) => {
	console.log(`~${req.method} ${req.url}`)
	next()
})

app.use(cors({ credentials: true, origin: "http://localhost:4000" }))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", require("./routes/auth"))
app.use("/api", require("./routes/pages"))
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

app.listen(port, () => {
	connectDb()
	console.log(`listening on port ${port}`)
})
