import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { addEvent } from "../../../http/event";

const initialState = {
  name: "",
  location: "",
  date: "",
  stime: "",
  etime: "",
  contact: "",
  description: "",
};

function DonationProgram({ auth }) {
  const alert = useAlert();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  useEffect(() => {
    // if (!auth.isauthed && !auth.loading) {
    //   navigate("/login");
    // }
    // console.log(auth);
  }, [auth.isauthed]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, location, date, stime, etime, contact, description } = values;
    if (
      !name ||
      !location ||
      !date ||
      !stime ||
      !etime ||
      !contact ||
      !description
    ) {
      alert.show("MISSING FIELD!");
      return;
    }
    console.log(values);
    addEvent(values)
      .then((res) => {
        alert.show("EVENT ADDED");
        setValues(initialState);
      })
      .catch((e) => {
        console.log(e);
        alert.show(
          e?.response?.data?.error
            ? e.response.data.error
            : "FAILED TO ADD EVENT."
        );
      });
  };

  if (!auth.loading && auth.role !== "org") {
    return (
      <div>
        <h1>ACCESS DENIED.</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-1 mt-20">
      <div className="bg-bg1 flex justify-center mx-[20%]">
        <form className="max-w-[500px] w-full mx-auto rounded-lg bg-[#850000] p-8 px-8">
          <h2 className=" text-txt1 text-2xl font-bold text-center pb-5 uppercase">
            host blood donation event
          </h2>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Event Name</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Location of the event</label>
            <input
              className="rounded-lg  mt-2 p-2 bg-bg3 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="location"
              value={values.location}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Date of the event </label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Start time</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="time"
              name="stime"
              value={values.stime}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>End time</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="time"
              name="etime"
              value={values.etime}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Contact number</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="contact"
              value={values.contact}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-auto flex-col text-txt1 pb-2">
            <label>Description of the event</label>
            <textarea
              rows="4"
              className="block  w-full rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1 "
              placeholder="Event description"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </div>

          <button
            className="w-full my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg"
            onClick={onSubmit}
          >
            POST EVENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonationProgram;
