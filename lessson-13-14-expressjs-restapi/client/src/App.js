import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";

import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

/*
  Login
  - First time user visit: login => API login => token => attach token x-auth-token + save token localstorage
  - Second time:
    + Keep authenticated status
    + Get token from localstorage => verify token? => attach token x-auth-token => redirect
  
  Logout:
    + isAuthenticated: false
    + remove token in localstorage
    + redirect to LoginPage

  Register:
    + Fill in form => submit
    + (1) Redirect to Login page => Login()
    + (2)Auto login => Login() => redirect Home
*/
