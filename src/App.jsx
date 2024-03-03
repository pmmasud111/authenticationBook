import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Component/Page/Home";
import Login from "./Component/Page/Login";
import Register from "./Component/Page/Register";
import Reset from "./Component/Page/Reset";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} exact />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
