import http from "./http-common";

const listEvent = (date = "", location = "") => {
  return http.get(`/event/?date=${date}&location=${location}`);
};

export{listEvent}