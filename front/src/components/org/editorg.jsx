import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { getOrgProfile, updateOrg } from "../../../http/org";

const EditOrg = ({ auth }) => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const alert = useAlert();

  useEffect(() => {
    if (!auth.isauthed && !auth.loading) {
      navigate("/login");
    } else {
      getOrgProfile()
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
    const { address, email, phone } = values;
    if (!address || !email || !phone) {
      alert.show("MISSING FIELD!");
      return;
    }
    updateOrg(values)
      .then((res) => {
        alert.show("ORGANIZATION PROFILE UPDATED!");
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
          <h2 className="text-2xl text-txt1 font-bold text-center pb-1">
            ORGANIZATION PROFILE
          </h2>

          <div className="flex flex-col text-txt1 pb-2">
            <label>Organization Name</label>
            <input
              className="rounded-lg bg-bg3 mt-2 p-2 text-txt2 focus:bg-bgfocus focus:outline-none focus:text-txt1"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              disabled={true}
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
              disabled={true}
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

          <button
            className="w-full my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg"
            onClick={onSubmit}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditOrg;
