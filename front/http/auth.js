import http from "./http-common";

const registerdonor = (values) => {
  let data = JSON.parse(JSON.stringify(values))
  delete data["password2"]
  return http.post(`/auth/registerDonor`, data);
};

const registerorg = ()=>{
    return http.post(`/auth/registerOrg`);
}

const login = ()=>{
  return http.post(`/auth/login`);
}

export{registerdonor, registerorg, login}
