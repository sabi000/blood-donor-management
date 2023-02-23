import React from "react";

function RegisterOrg() {
  return (
    <div className="grid grid-rows-1 mt-20">
      <div className="bg-[#000300] flex justify-center mx-[20%]">
        <form className="max-w-[500px] w-full mx-auto rounded-lg bg-[#850000] p-8 px-8">
          <h2 className="text-4xl text-slate-200 font-bold text-center pb-1">
            REGISTER
          </h2>
          <h3 className="text-txt1 text-sm text-center pb-3 font-semibold uppercase "> As an Organization.</h3>

          <div className="flex flex-col text-slate-200 pb-2">
            <label>Organization Name</label>
            <input
              className="rounded-lg bg-slate-200 mt-2 p-2 text-txt2 focus:bg-gray-700 focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          <div className="flex flex-col text-slate-200 pb-2">
            <label>Address</label>
            <input
              className="rounded-lg  mt-2 p-2 bg-slate-200 text-txt2 focus:bg-gray-700 focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          <div className="flex flex-col text-slate-200 pb-2">
            <label>PAN number </label>
            <input
              className="rounded-lg bg-slate-200 mt-2 p-2 text-txt2 focus:bg-gray-700 focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>

          <div className="flex flex-col text-slate-200 pb-2">
            <label>E-mail address</label>
            <input
              className="rounded-lg bg-slate-200 mt-2 p-2 text-txt2 focus:bg-gray-700 focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          
          <div className="flex flex-col text-slate-200 pb-2">
            <label>Contact number</label>
            <input
              className="rounded-lg bg-slate-200 mt-2 p-2 text-txt2 focus:bg-gray-700 focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>

          <div className="flex flex-col text-slate-200 pb-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-slate-200 mt-2 p-2 text-txt2 focus:bg-gray-700 focus:outline-none focus:text-txt1"
              type="password"
            />
          </div>
          <div className="flex flex-col text-slate-200 pb-2">
            <label>Confirm Password</label>
            <input
              className="rounded-lg bg-slate-200 mt-2 p-2 text-txt2 focus:bg-gray-700 focus:outline-none focus:text-txt1"
              type="password"
            />
          </div>

          <button className="w-full my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg">
            REGISTER
          </button>
          <div className="flex gap-2 justify-center pb-2 pt-1">
            <p className=" text-slate-400">Already registered? </p>
            <p className=" underline text-slate-400 ">
              <a href="/">Login.</a>{" "}
            </p>
          </div>

          <div className="flex gap-2 justify-center">
            <p className=" text-slate-400">Registering as a donor? </p>
            <p className=" underline text-slate-400 ">
              <a href="/">Register here.</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterOrg;
