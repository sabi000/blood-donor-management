import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Navbar from "./components/Navbar";
import RegisterDonor from "./components/auth/registerDonor";
import RegisterOrg from "./components/auth/registerOrg";
import DonationProgram from "./components/events/addEvent";
import EditDonor from "./components/donors/editDonor";
import EditOrg from "./components/org/editorg";
import DonorList from "./components/donors/donorList";
import EventList from "./components/events/eventList";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { verifyLogin } from "../http/auth";
const initialState = {
  isauthed: false,
  role: false,
  loading: false,
};

function App() {
  const [auth, setAuth] = useState(initialState);

  useEffect(() => {
    setAuth({ ...auth, loading: true });
    if (!auth.isauthed)
      verifyLogin()
        .then((res) => {
          console.log(res.data);
          setAuth({
            ...auth,
            isauthed: true,
            role: res.data.role,
            loading: false,
          });
        })
        .catch((e) => {
          // console.log(e)
          setAuth(initialState);
        });
  }, []);
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
  };
  if (auth.loading)
    return (
      <div className="text-3xl w-2/3 mx-auto mt-32 my-auto">
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Navbar auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path="/" element={<DonorList />} />
          <Route
            path="/login"
            element={<Login auth={auth} setAuth={setAuth} />}
          />
          <Route path="/events" element={<EventList />} />
          <Route path="/regdonor" element={<RegisterDonor />} />
          <Route path="/regorg" element={<RegisterOrg />} />
          <Route path="/addevent" element={<DonationProgram auth={auth} />} />
          <Route path="/editdonor" element={<EditDonor auth={auth} />} />
          <Route path="/editorg" element={<EditOrg />} />
        </Routes>
      </Router>
    </AlertProvider>
  );
}

export default App;
