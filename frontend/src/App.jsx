import "./App.css";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Messageb from "./Pages/Messageb";
import Card from "./Components/Card";
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
            <Route path="/Home" element={<Home />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Messageb" element={<Messageb />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
