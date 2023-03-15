import http from "./http-common"

const getOrgProfile = () => {
	return http.get(`orgprofile`)
}

const updateOrg = values => {
	return http.put(`org`, values)
}

export {getOrgProfile, updateOrg }
