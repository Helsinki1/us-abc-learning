import './App.css'
import { auth, provider } from "./firebase-config"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";

function App() {
  console.log("App is rendering"); // Debug
  const [isAuth, setIsAuth] = useState(false); // track if the user is logged in w state variable

  const signUserOut = () => {
    signOut(auth).then( () => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        {isAuth && <Link to="/createpost"> CreatePost </Link>}
        {!isAuth? <Link to="/login"> Login </Link> : <button onClick={signUserOut}> Logout </button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  )
}

export default App
