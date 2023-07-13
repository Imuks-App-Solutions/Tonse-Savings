import "./App.css";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Card from "./Components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
