import { useState, useEffect } from "react";
import { listOrgEvent } from "../../../http/event";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function OrgEventList() {
  const [events, setEvent] = useState([]);

  const geteventList = () => {
    listOrgEvent()
      .then((res) => {
        setEvent(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    geteventList();
  }, []);

  return (
    <div className="flex flex-col h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="grid grid-cols-3 gap-4 mt-6 mx-10 ">
        {events.length > 0
          ? events.map((event) => {
              return (
                <div className="block max-w-sm p-6 bg-gray-500 border border-gray-700 rounded-lg shadow hover:bg-gray-400 ">
                  <div className="flex gap-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {event.name}
                    </h5>
                  </div>
                  <div className="flex flex-col">
                    <h3 className=""> {event.location}</h3>
                    <h3 className=""> {event.date}</h3>
                    <h3 className=""> {event.stime}</h3>
                    <h3 className=""> {event.etime}</h3>
                    <p className="font-normal text-gray-700 ">
                      {event.description}
                    </p>
                    <div className="flex place-content-end gap-2 text-2xl text-red1">
                      <Link to={`/editevent/${event.pid}`}>
                        <BiEdit />
                      </Link>
                      <MdDelete />
                    </div>
                  </div>
                </div>
              );
            })
          : "No matching events found."}
      </div>
    </div>
  );
}

export default OrgEventList;
