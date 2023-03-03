import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Navbar from "./components/navbar";
import RegisterDonor from "./components/auth/registerDonor";
import RegisterOrg from "./components/auth/registerOrg";
import DonationProgram from "./components/events/addEvent";
import DonorList from "./components/donors/donorList";
import EventList from "./components/events/eventList";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
  };

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DonorList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/regdonor" element={<RegisterDonor />} />
          <Route path="/regorg" element={<RegisterOrg />} />
          <Route path="/addevent" element={<DonationProgram />} />
        </Routes>
      </Router>
    </AlertProvider>
  );
}

export default App;
