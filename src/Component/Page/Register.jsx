import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../Firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      navigate("/login");
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mt-20 mb-12">Registretion Here</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-bold">
            Register Email
          </label>
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
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-bold">
            {" "}
            Register password{" "}
          </label>
          <input
            className="py-3 my-2 px-4 rounded-md outline-none bg-gray-200 w-[400px]"
            type="password"
            value={password}
            id="password"
            placeholder="Type your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white rounded-md p-2 font-bold text-lg my-2"
        >
          Register
        </button>
      </form>
      <p>
        Already have an account ?{" "}
        <NavLink
          to="/login"
          className="text-blue-700 font-semibold underline text-lg"
        >
          Sing in
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
