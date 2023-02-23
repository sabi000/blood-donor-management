import React from "react"
import DonationProgram from "./components/donorProg"
import Login from "./components/login"
import Navbar from "./components/Navbar"
import RegisterDonor from "./components/registerDonor"
import RegisterOrg from "./components/registerOrg"

function App() {
  return (
    <div>
      <Navbar/>
      <DonationProgram/>
    </div>
  )
}

export default App
