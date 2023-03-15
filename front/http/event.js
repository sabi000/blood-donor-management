import http from "./http-common";

const listEvent = (date = "", location = "") => {
  return http.get(`/event/?date=${date}&location=${location}`);
};

const addEvent = values => {
	return http.post(`/event`, values)
}

export{listEvent, addEvent}
