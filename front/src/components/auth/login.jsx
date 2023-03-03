import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="grid grid-rows-1 mt-20">
      <div className="bg-bg1 flex justify-center mx-[20%]">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-[#850000] p-8 px-8">
          <h2 className="text-4xl text-txt1 font-bold text-center pb-4">
            LOGIN
          </h2>
          <div className="flex flex-col text-txt1 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-txt1 mt-2 p-2 text-txt2  focus:bg-bgfocus  focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          <div className="flex flex-col text-txt1 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-txt1 mt-2  text-txt2  focus:bg-bgfocus  focus:outline-none focus:text-txt1"
              type="password"
            />
          </div>

          <button className="w-full mt-4 my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg">
            LOGIN
          </button>
          <div className="flex gap-2 justify-center">
            <p className=" text-slate-400">New here? </p>
            <p className=" underline text-slate-400 ">
              <Link to="/regdonor">Sign up.</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
