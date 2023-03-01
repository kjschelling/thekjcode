import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      action="https://formsubmit.co/2b9ef1ef6530a547b9c10745c60d92bd"
      method="POST"
      className="max-w-lg mx-auto"
    >
      {/* FORM WITH FORMSUBMIT SYNTAX */}
      <div className="my-4">
        <label htmlFor="email" className="block text-black-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          placeholder="Your email"
        />
      </div>

      <div className="my-4">
        <label
          htmlFor="subject"
          className="block text-black-700 font-bold mb-2"
        >
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          placeholder="Email subject"
        />
      </div>
      <div className="my-4">
        <label
          htmlFor="message"
          className="block text-black-700 font-bold mb-2"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
          required
          placeholder="Your message here"
        />
      </div>
      <div className="my-4">
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
