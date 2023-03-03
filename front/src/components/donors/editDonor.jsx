import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditDonor = ({ auth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isauthed && !auth.loading) {
      navigate("/login");
    }
  }, [auth.isauthed]);

  return <div>EDIT PROFILE HERE!</div>;
};

export default EditDonor;
