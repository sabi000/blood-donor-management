import http from "./http-common";

const listDonor = (address = "", bloodgroup = "") => {
  return http.get(`/donor/?address=${address}&bloodgroup=${bloodgroup}`);
};

const getDonorProfile = () => {
  return http.get(`/donor/?address=${""}&bloodgroup=${""}`, {withCredentials: true});
};


export{listDonor, getDonorProfile}