import http from "./http-common"

const listDonor = (address = "", bloodgroup = "") => {
	return http.get(`/donor/?address=${address}&bloodgroup=${bloodgroup}`)
}

const getDonorProfile = () => {
	return http.get(`donorprofile`)
}

const updateDonor = values => {
	return http.put(`donor`, values)
}

export { listDonor, getDonorProfile, updateDonor }
