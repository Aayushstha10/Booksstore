import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Have questions about our books or need assistance? We'd love to hear
            from you. Send us a message and our team will get back to you as
            soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">
                    Book Haven Store
                    <br />
                    Putalisadak, Kathmandu
                    <br />
                    Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-green-600 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+977-9800000000</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-red-100 p-4 rounded-full">
                  <FaEnvelope className="text-red-600 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">
                    support@bookhaven.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <FaClock className="text-yellow-600 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Send Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;