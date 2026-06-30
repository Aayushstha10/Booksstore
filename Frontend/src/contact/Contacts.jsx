import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

function Contacts() {
  return (
    <>
      <Navbar />

      <p className="mt-20 px-4 py-3 text-center text-4xl font-extrabold leading-tight">
        Have questions or need help?
        <br />
        <span className="text-cyan-600">
          We’re here to make your book experience better 📚
        </span>
      </p>

      <div className="mt-4">
        <Contact />
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default Contacts;
