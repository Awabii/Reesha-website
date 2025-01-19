import React from 'react';
import "@fontsource/andada-pro"; 
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/homepage/homePage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
