import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useRef } from 'react';
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Error from "./pages/Error";

function Login() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="*" element={<Error />} exact />
          {/* TODO: make these links accessible only if the user is logged in */}
          <Route path="/home" element={<Landing />} exact />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Login;