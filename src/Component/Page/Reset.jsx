/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { sendPasswordReset } from "../../Firebase";

const Reset = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mt-20 mb-12">Reset Here</h1>
      <div>
        <input
          className="py-3 my-2 px-4 rounded-md outline-none bg-gray-200 w-[400px]"
          type="email"
          value={email}
          id="email"
          placeholder="Type your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button
        onClick={() => sendPasswordReset(email)}
        type="submit"
        className="bg-green-600 text-white rounded-md p-2 font-bold text-lg my-2"
      >
        Reset your password
      </button>
      <p>
        Don't you have no account ?{" "}
        <NavLink
          className="text-blue-700 font-semibold underline text-lg"
          to={"/register"}
        >
          Register
        </NavLink>{" "}
      </p>
    </div>
  );
};

export default Reset;
