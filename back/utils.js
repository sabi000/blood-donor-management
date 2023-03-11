const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

const tokenGenerator = (role, email) => {
	return jwt.sign({ role: role, email: email }, process.env.JWT_SECRET, {
		expiresIn: "3h",
	})
}

const verifyToken = token => {
	return jwt.verify(token, process.env.JWT_SECRET)
}

const verifyAuth = (req, res, next) => {
	console.log("cookie check")

	//   if (!token) return res.status(401).json({ error: "Auth error" });
	try {
		const { token } = req.cookies
		req.id = verifyToken(token)
		next()
	} catch {
		return res.status(401).json({ error: "Auth error" })
	}
}

module.exports = { tokenGenerator, verifyToken, verifyAuth }
