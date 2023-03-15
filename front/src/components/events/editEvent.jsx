import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { getEventProfile, updateEvent } from "../../../http/event";

const EditEvent = ({ auth }) => {
  const [values, setValues] = useState({});
  const { pid } = useParams();
  const navigate = useNavigate();
  const alert = useAlert();

  useEffect(() => {
    if (!auth.isauthed && !auth.loading) {
      navigate("/login");
    } else {
      getEventProfile(pid)
        .then((res) => {
          setValues(res.data.data);
        })
        .catch((e) => {
          alert.show(
            e?.response?.data?.error
              ? e.response.data.error
              : "FAILED TO FETCH DATA"
          );
        });
    }
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
    updateEvent(values)
      .then((res) => {
        alert.show("EVENT UPDATED!");
      })
      .catch((e) => {
        console.log(e);
        alert.show(
          e?.response?.data?.error ? e.response.data.error : "FAILED TO UPDATE."
        );
      });
  };

  return (
    <div className="grid grid-rows-1 mt-10">
      <div className="bg-bg1 flex justify-center mx-[20%]">
        <form className="max-w-[500px] w-full mx-auto rounded-lg bg-red2 p-8">
          <h2 className="text-2xl text-txt1 font-bold text-center pb-4">
            EVENT DESCRIPTION
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
            EDIT EVENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
