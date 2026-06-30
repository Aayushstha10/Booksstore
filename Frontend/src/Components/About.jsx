import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="mt-20 bg-cyan-50 py-16 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">
          About <span className="text-cyan-600">Us</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We are passionate about books, learning, and creating a better reading
          experience for everyone 📚
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Our website is designed to make discovering, buying, and managing
          books simple and enjoyable. We aim to provide readers with a smooth
          platform where they can explore a wide range of books and get the
          information they need effortlessly.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 px-6 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 ">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed ">
              Our mission is to promote reading habits and provide easy access
              to books through a user-friendly digital platform.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where technology and knowledge come together
              to empower readers and learners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="bg-gray-300 shadow-xl rounded-xl p-6 text-center hover:scale-105 duration-200">
            <h4 className="text-xl font-semibold mb-2">Easy to Use</h4>
            <p className="text-gray-600">
              Simple and intuitive interface for all users.
            </p>
          </div>

          <div className="bg-gray-300  shadow-md rounded-xl p-6 text-center hover:scale-105 duration-200">
            <h4 className="text-xl font-semibold mb-2">Wide Collection</h4>
            <p className="text-gray-600">
              Access to a variety of books across multiple categories.
            </p>
          </div>

          <div className="bg-gray-300 shadow-md rounded-xl p-6 text-center hover:scale-105 duration-200">
            <h4 className="text-xl font-semibold mb-2">Reliable Support</h4>
            <p className="text-gray-600">
              We are always here to help you with your queries.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">
          Start Your Reading Journey Today
        </h2>
        <p className="mb-6">
          Explore books, gain knowledge, and enjoy the experience with us.
        </p>
        <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Explore Books
        </button>
      </section>
      {/* 
      <Footer /> */}
    </>
  );
}

export default About;
