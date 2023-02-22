import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Carousel from "../pages/Carousel";
import  Home from "../pages/Home";
import Login from "../pages/Login";
import { AuthProvider } from '../context/AuthContext'
import Profile from "../pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </AuthProvider>
      
    </BrowserRouter>
  );
};

export default App;
