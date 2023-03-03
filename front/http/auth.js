import http from "./http-common";

const regsiterdonor = () => {
  return http.post(`/auth/regsiterDonor`);
};

const registerorg = ()=>{
    return http.post(`/auth/regsiterorg`);
}

export{regsiterdonor, registerorg}