import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Navbar from "./components/navbar";
import RegisterDonor from "./components/registerDonor";
import RegisterOrg from "./components/registerOrg";
import DonationProgram from "./components/addEvent";
import DonorList from "./components/donorList";
import EventList from "./components/eventList";

function App() {
  return (
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
  );
}

export default App;
