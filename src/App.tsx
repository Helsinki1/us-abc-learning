import { auth, provider } from "./firebase-config"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import "./index.css"

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Appt from "./pages/Appt";

function App() {
  console.log("App is rendering"); // Debug
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth") ?? "false")); // track if the user is logged in w state variable

  const signUserOut = () => {
    signOut(auth).then( () => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav className="flex items-center bg-slate-300 px-4 py-4">
        <button onClick={()=>{window.location.pathname="/"}} className="ml-28">
          <img src="../public/logo-removebg.png" className="w-18 h-auto"></img>
        </button>

        <div className= "flex ml-auto">
          <Link to="/" className="text-gray-700 hover:underline mr-11 text-lg"> 
            首页
          </Link>
          <Link to="/courses" className="text-gray-700 hover:underline mr-11 text-lg"> 
            课程体系
          </Link>
          <Link to="/aboutus" className="text-gray-700 hover:underline mr-11 text-lg">
            外教团队
          </Link>
          <Link to="/contactus" className="text-gray-700 hover:underline mr-11 text-lg">
            联系我们 
          </Link>
          {!isAuth? <Link to="/login" className="mr-7 text-lg"> Login </Link> : <button className="mr-7 text-lg" onClick={signUserOut}> Logout </button>}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/appt" element={<Appt />} />
      </Routes>
    </Router>
  )
}

export default App
