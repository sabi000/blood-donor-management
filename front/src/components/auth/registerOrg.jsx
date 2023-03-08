import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { registerorg } from "../../../http/auth";

const initialState = {
  name: "",
  address: "",
  PAN: "",
  email: "",
  phone: "",
  password: "",
  password2: "",
};

function RegisterOrg() {
  const alert = useAlert();
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, address, PAN, email, phone, password, password2 } = values;
    if (password2 !== password) {
      alert.show("PASSWORD MISMATCH!");
      return;
    }
    if (!name || !address || !PAN || !email || !phone || !password) {
      alert.show("MISSING FIELD!");
      return;
    }
    console.log(values);
    registerorg(values)
      .then((res) => {
        alert.show("ORGANIZATION REGISTERED!");
        setValues(initialState);
      })
      .catch((e) => {
        console.log(e);
        alert.show(
          e?.response?.data?.error
            ? e.response.data.error
            : "FAILED TO REGISTER."
        );
      });
  };

  return (
    <div className="grid grid-rows-1 mt-20">
      <div className="bg-bg1 flex justify-center mx-[20%]">
        <form className="max-w-[500px] w-full mx-auto rounded-lg bg-red2 p-8 px-8">
          <h2 className="text-4xl text-txt1 font-bold text-center pb-1">
            REGISTER
          </h2>
          <h3 className="text-txt1 text-sm text-center pb-3 font-semibold uppercase ">
            {" "}
            As an Organization.
          </h3>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Organization Name</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Address</label>
            <input
              className="rounded-lg  mt-2 p-2 bg-bg3 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>PAN number </label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="PAN"
              value={values.PAN}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>E-mail address</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Contact number</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Confirm Password</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
          </div>

          <button
            className="w-full my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-txt1 font-semibold rounded-lg"
            onClick={onSubmit}
          >
            REGISTER
          </button>
          <div className="flex gap-2 justify-center pb-2 pt-1">
            <p className=" text-slate-400">Already registered? </p>
            <p className=" underline text-slate-400 ">
              <Link to="/login">Login.</Link>{" "}
            </p>
          </div>

          <div className="flex gap-2 justify-center">
            <p className=" text-slate-400">Registering as a donor? </p>
            <p className=" underline text-slate-400 ">
              <Link to="/regdonor">Register here.</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterOrg;
