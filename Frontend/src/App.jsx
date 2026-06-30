import React from "react";
import "./index.css";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import Contacts from "./contact/Contacts";
import About from "./Components/About";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}
export default App;
