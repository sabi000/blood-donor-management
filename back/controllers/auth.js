const { client } = require("../db/db")
const { tokenGenerator } = require("../utils")
const bcrypt = require("bcrypt")

const registerDonor = async (req, res) => {
	const { name, address, bloodgroup, email, phone, password, available } =
		req.body

	const exist = await client
		.promise()
		.query(
			"select email from donor where email =? union select email from org where email=? ",
			[email, email]
		)
		.then(([rows, fields]) => {
			return rows
		})
		.catch(e => console.log(e))
	console.log(exist)

	if (exist.length > 0)
		return res.status(500).json({ error: "email already in use." })

	const salt = await bcrypt.genSalt(10)

	client.query(
		"insert into donor(name, address, bloodgroup, email, phone, password, available) values(?, ?, ?, ?, ?, ?, ?)",
		[
			name,
			address,
			bloodgroup,
			email,
			phone,
			await bcrypt.hash(password, salt),
			available,
		],
		(error, result) => {
			if (error) {
				//console.log(error)
				return res.status(500).json({ error: "something went wrong." })
			} else return res.status(201).json({ message: "user registered." })
		}
	)
}

const registerOrg = async (req, res) => {
	const { name, address, PAN, email, phone, password } = req.body
	console.log("body", req.body)

	const exist = await client
		.promise()
		.query(
			"select email from donor where email =? union select email from org where email=? ",
			[email, email]
		)
		.then(([rows, fields]) => {
			console.log("Existing email")
			return rows
		})
		.catch(e => console.log(e))
	console.log(exist)

	if (exist.length > 0)
		return res.status(500).json({ error: "email already in use." })

	const salt = await bcrypt.genSalt(10)

	console.log("salt here", password)
	client.query(
		"insert into org(name, address, PAN, email, phone, password) values(?, ?, ?, ?, ?, ?)",
		[name, address, PAN, email, phone, await bcrypt.hash(password, salt)],
		(error, result) => {
			if (error)
				return res.status(500).json({ error: "something went wrong." })
			else return res.status(201).json({ message: "user registered." })
		}
	)
}

const login = async (req, res) => {
	const { role, email, password } = req.body
	const exist = await client
		.promise()
		.query(
			"select email from donor where email =? union select email from org where email=? ",
			[email, email]
		)
		.then(([rows, fields]) => {
			return rows
		})
		.catch(e => console.log(e))
	//console.log(exist);

	if (exist.length < 1) {
		return res.status(500).json({ error: "invalid credentials." })
	}
	let password2 = ""
	if (role === "donor") {
		password2 = await client
			.promise()
			.query("select password from donor where email =? ", [email])
			.then(([rows, fields]) => {
				return rows
			})
			.catch(e => console.log(e))
	} else {
		password2 = await client
			.promise()
			.query("select password from org where email =? ", [email])
			.then(([rows, fields]) => {
				return rows
			})
			.catch(e => console.log(e))
	}
	//console.log(password)
	try {
		if (!(await bcrypt.compare(password, password2[0].password))) {
			return res.status(500).json({ error: "invalid credentials." })
		}
		const token = tokenGenerator(role, email)
		res.cookie("token", token)
		//console.log("MESSAGE HERER:", token);
		return res
			.status(200)
			.json({ message: "Login Successful.", role: role })
	} catch {
		return res.status(401).json({ error: "Invalid credentials" })
	}
}

const logout = async (req, res) => {
	res.clearCookie("token")
	return res.status(200).json({ message: "Logout Sucessful !" })
}

const verify = async (req, res) => {
	let role = "org"
	let results = await client
		.promise()
		.query("SELECT email FROM donor WHERE email = ?", [req.id.email])
		.then(([rows, fields]) => {
			return rows
		})
		.catch(err => {
			console.log(err)
		})
	if (results.length > 0) role = "donor"
	return res.status(200).json({ message: "Login Sucessful !", role: role })
}

module.exports = { registerDonor, registerOrg, login, logout, verify }
