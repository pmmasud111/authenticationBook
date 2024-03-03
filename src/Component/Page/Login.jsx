import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, singInWithGoogle } from "../../Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickGoogleLogin = async () => {
    try {
      const user = await singInWithGoogle();
      navigate("/home");
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mt-20 mb-12">Log in Here</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-bold">
            Email
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
            Password{" "}
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
          Login
        </button>
      </form>
      <button
        onClick={handleClickGoogleLogin}
        type="submit"
        className="bg-blue-600 text-white rounded-md py-2 px-8 font-bold text-lg w-[400px]"
      >
        Log in with Google
      </button>
      <div>
        <p className="mt-4 mb-2">
          You have no account ?{" "}
          <NavLink
            to="/register"
            className="text-blue-700 font-semibold underline text-lg"
          >
            Register
          </NavLink>
        </p>
        <p>
          Forgte your password ?{" "}
          <NavLink
            to={"/reset"}
            className="text-blue-700 font-semibold underline text-lg"
          >
            Reset password
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
