import React from "react";
import { Routes, Route } from "react-router-dom";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Popular/>} />
    </Routes>
  );
};

export default AllRouting;
