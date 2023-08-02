import "./App.css";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import MemberInfo from "./Pages/MemberInfo";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Messageb from "./Pages/Messageb";
import Card from "./Components/Card";
import Chart from './Pages/Chart';
import Contact from './Pages/Contact';
import Map from './Pages/Map';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./shared/authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<SignUp />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Memberinfo" element={<Memberinfo />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Messageb" element={<Messageb />} />
            <Route path="/Chart" element={<Chart />} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Map" element={<Map/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
