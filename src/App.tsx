import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./component/login/Login";
import Registration from "./component/registration/Registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
