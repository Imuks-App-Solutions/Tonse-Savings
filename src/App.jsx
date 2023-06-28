import './App.css'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import SignUp from "./Pages/SignUp"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Realm from "realm";


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
    <Route index element= {<SignUp/>} />
    <Route path = "/Signup" element= {<SignUp/>} />
    <Route path = "/Dashboard" element= {<Dashboard/>} />
    </Routes>  
    </BrowserRouter>
      <SignUp/>
      <Navbar/>
      <Dashboard/>
      <Realm/>
      </>
  )
}

export default App
