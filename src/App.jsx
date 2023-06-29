import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import * as Realm from 'realm-web'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
