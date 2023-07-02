import React from "react";
import { Home } from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './routes/login/Login'
import Admin from './routes/admin/Admin'

function App() {
  let auth = localStorage.getItem("x-auth")

  return (
    <div className="App">
      <Routes>
        {
          auth ?
            <Route path='/login' element={<Navigate replace to={"/admin"} />} />
            :
            <Route path='/admin' element={<Navigate replace to={"/login"} />} />
        }
        <Route path='/' element={<Home />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
