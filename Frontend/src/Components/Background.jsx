import React from "react";

function Background() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <marquee
        className="absolute top-20 left-0 w-full bg-red-600 text-white py-2 font-bold z-10"
        behavior="scroll"
        direction="left"
        scrollamount="6"
      >
        🚧 DEVELOPMENT PHASE: This website is under development. Some features
        may not work as expected.
      </marquee>

      <img
        src="/book.jpg"
        alt="Hero Banner"
        className="w-full h-100px object-cover mt-17"
      />
    </section>
  );
}

export default Background;