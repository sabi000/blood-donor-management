import http from "./http-common"

const registerdonor = values => {
	let data = JSON.parse(JSON.stringify(values))
	delete data["password2"]
	return http.post(`/auth/registerDonor`, data)
}

const registerorg = values => {
	let data = JSON.parse(JSON.stringify(values))
	delete data["password2"]
	console.log(data)
	return http.post(`/auth/registerOrg`, data)
}

const login = values => {
	return http.post(`/auth/login`, values)
}

const verifyLogin = () => {
	return http.get(`/auth/verify`)
}

const logout = () => {
	return http.delete(`/auth/logout`)
}

export { registerdonor, registerorg, login, logout, verifyLogin }
