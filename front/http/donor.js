import http from "./http-common";

const listDonor = (address = "", bloodgroup = "") => {
  return http.get(`/donor/?address=${address}&bloodgroup=${bloodgroup}`);
};

export{listDonor}