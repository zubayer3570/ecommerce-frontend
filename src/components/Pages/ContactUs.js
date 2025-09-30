import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQueryThunk } from "../../features/userSlice";

export default function ContactUs() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQueryThunk({ name: e.target.name.value, email: e.target.email.value, message: e.target.message.value }));
  };

  return (
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 mx-auto mt-24">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold bg-3 shadow-md transition text-[white]"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Or reach us directly at:</p>
          <p className="font-medium text-indigo-600">gadgetgeek@support.com</p>
        </div>
      </div>
  );
}
