import http from "./http-common";

const registerdonor = (values) => {
  let data = JSON.parse(JSON.stringify(values))
  delete data["password2"]
  return http.post(`/auth/registerDonor`, data);
};

const registerorg = ()=>{
    return http.post(`/auth/registerOrg`);
}

const login = (values)=>{
  return http.post(`/auth/login`, values);
}

const logout = ()=>{
  return http.delete(`/auth/logout`);
}


export{registerdonor, registerorg, login, logout}
