import React from "react";

function DonationProgram() {
  return (
    <div className="grid grid-rows-1 mt-20">
      <div className="bg-[#000300] flex justify-center mx-[20%]">
        <form className="max-w-[500px] w-full mx-auto rounded-lg bg-[#850000] p-8 px-8">
          <h2 className=" text-txt1 text-2xl font-bold text-center pb-5 uppercase">
            host blood donation event
          </h2>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Event Name</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Location of the event</label>
            <input
              className="rounded-lg  mt-2 p-2 bg-bg3 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>Date of the event </label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="date"
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Start time</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="time"
            />
          </div>
          <div className="flex flex-col text-txt1 pb-2">
            <label>End time</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="time"
            />
          </div>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Contact number</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
            />
          </div>
          <div className="flex flex-auto flex-col text-txt1 pb-2">
            <label>Description of the event</label>
            <textarea
              rows="4"
              class="block  w-full rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1 "
              placeholder="Event description"
            />
          </div>

          <button className="w-full my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg">
            POST EVENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonationProgram;
