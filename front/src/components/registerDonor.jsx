import React from "react";
import { Link } from "react-router-dom";

function RegisterDonor() {
  return (
    <div className="grid grid-rows-1 mt-20">
      <div className="bg-[#000300] flex justify-center mx-[20%]">
        <form className="max-w-[500px] w-full mx-auto rounded-lg bg-[#850000] p-8 px-8">
          <h2 className="text-4xl text-txt1 font-bold text-center pb-1">
            REGISTER
          </h2>
          <h3 className="text-txt1 text-sm text-center font-semibold pb-3 uppercase">
            As a donor.
          </h3>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Donor Name</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Address</label>
            <input
              className="rounded-lg  mt-2 p-2 bg-bg3 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Select your blood group</label>
            <select
              id="bloodGroup"
              class="bg-bg3 mt-2 p-2  text-txt2 rounded-lg  block w-full placeholder-gray-400  "
            >
              <option selected>Blood groups</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>E-mail address</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Phone number</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="password"
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Confirm Password</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="password"
            />
          </div>

          <div class="flex items-center mb-4">
            <input
              id="available"
              type="checkbox"
              value=""
              class="w-4 h-4 mt-4 bg-bg3 border-gray-300 rounded"
            />
            <label
              for="available"
              class="ml-2 mt-4  text-gray-900 dark:text-gray-300"
            >
              Available for donation.
            </label>
          </div>

          <button className="w-full my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg">
            REGISTER
          </button>
          <div className="flex gap-2 justify-center pb-2 pt-1">
            <p className=" text-slate-400">Already registered? </p>
            <p className=" underline text-slate-400 ">
              <Link to="/login">Login.</Link>{" "}
            </p>
          </div>

          <div className="flex gap-2 justify-center">
            <p className=" text-slate-400">Registering as an organization? </p>
            <p className=" underline text-slate-400 ">
              <Link to="/regorg">Register here.</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterDonor;
