import http from "./http-common";

const listEvent = (date = "", location = "") => {
  return http.get(`/event/?date=${date}&location=${location}`);
};

const addEvent = values => {
	return http.post(`/event`, values)
}
const getEventProfile = (pid) => {
	
	return http.get(`eventprofile?pid=${pid}`)
}

const updateEvent = (values, pid) => {
	return http.put(`event?pid=${pid}`, values)
}

const listOrgEvent = ()=>{
	return http.get(`getorgevent`)
}

export{listEvent, addEvent, getEventProfile, updateEvent, listOrgEvent}
