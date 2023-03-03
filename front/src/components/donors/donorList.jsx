import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { listDonor } from "../../../http/donor";

function DonorList() {
  const [donors, setDonor] = useState([]);
  const [filter, setFilter] = useState({ address: "", bloodgroup: "" });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    //console.log("Handlechange", filter);
  };

  const getDonor = () => {
    listDonor(filter.address, filter.bloodgroup)
      .then((res) => {
        console.log(res.data.data);
        setDonor(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getDonor();
    //console.log("HELLEOE", donorss);
  }, []);

  return (
    <div className="flex flex-col h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex gap-6 pb-2 justify-end mt-2">
        <input
          className="rounded-lg  mt-2 p-2 bg-bg3 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
          type="text"
          name="address"
          placeholder="Search address"
          onChange={handleChange}
        />

        <select
          name="bloodgroup"
          onChange={handleChange}
          className="bg-bg3 mt-2 p-2  text-txt2 rounded-lg  block placeholder-gray-400  "
        >
          <option value="%">Select bloodgroup</option>
          <option value="O%2B">O+</option>
          <option value="O-">O-</option>
          <option value="A%2B">A+</option>
          <option value="A-">A-</option>
          <option value="B%2B">B+</option>
          <option value="B-">B-</option>
          <option value="AB%2B">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <div onClick={getDonor}>
          <BiSearch className="text-4xl my-auto -ml-2 p-2  mt-3  bg-gray-800 rounded-lg cursor-pointer " />
        </div>
      </div>

      <table className="table-auto mt-6">
        <thead>
          <tr className="bg-[#620a0a] text-txt1">
            <th className="text-left p-1 mt-3">Name</th>
            <th className="text-left p-1 mt-3">Address</th>
            <th className="text-left p-1 mt-3">Bloodgroup</th>
            <th className="text-left p-1 mt-3">Phone number</th>
          </tr>
        </thead>
        {donors.length > 0
          ? donors.map((donors) => {
              return (
                <tbody>
                  <tr className="border-b-2 pt-3 hover:bg-slate-600">
                    <td className="">{donors.name}</td>
                    <td className="">{donors.address}</td>
                    <td className="">{donors.bloodgroup}</td>
                    <td className="">{donors.phone}</td>
                  </tr>
                </tbody>
              );
            })
          : "No matching donors found."}
      </table>
    </div>
  );
}

export default DonorList;
