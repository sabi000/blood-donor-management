import { useState, useEffect } from "react";
import { listEvent } from "../../../http/event";
import { BiSearch } from "react-icons/bi";

function EventList() {
  const [events, setEvent] = useState([]);
  const [filter, setFilter] = useState({ date: "", location: "" });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    //console.log("Handlechange", filter);
  };

  const getEvents = () => {
    listEvent(filter.date, filter.location)
      .then((res) => {
        setEvent(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getEvents();
    //console.log("HELLEOE", events);
  }, []);

  return (
    <div className="flex flex-col h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex gap-6 pb-2 justify-end mt-2">
        <input
          className="rounded-lg  mt-2 p-2 bg-bg3 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
          type="text"
          name="location"
          placeholder="Search location"
          onChange={handleChange}
        />

        <input
          className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
          type="date"
          name="date "
          onChange={handleChange}
        />

        <div onClick={getEvents}>
          <BiSearch className="text-4xl my-auto -ml-2 p-2  mt-3  bg-gray-800 rounded-lg cursor-pointer " />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 mx-10 ">
        {events.length > 0
          ? events.map((event) => {
              return (
                <div class="block max-w-sm p-6 bg-gray-400 border border-gray-900 rounded-lg shadow hover:bg-gray-300 ">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {event.name}
                  </h5>
                  <div className="flex flex-col">
                    <h3 className=""> {event.location}</h3>
                    <h3 className=""> {event.date}</h3>
                    <h3 className=""> {event.stime}</h3>
                    <h3 className=""> {event.etime}</h3>
                    <p class="font-normal text-gray-700 ">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })
          : "No matching events found."}
      </div>
    </div>
  );
}

export default EventList;
