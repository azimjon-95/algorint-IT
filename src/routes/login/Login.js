import React, { useState } from 'react'
import "./Login.css"
import { BiUser } from "react-icons/bi"
import axios from "../../api"
import { Link, useNavigate } from "react-router-dom"
import { useStateValue } from '../../Context/index'
import logo from '../../asets/main/alg-logo.jpg'

function Login() {
  const [state, dispatch] = useStateValue()


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    axios.post("/admins/sign-in", { username, password })
      .then(res => {
        if (res.data.state) {
          console.log(res.data.innerData);
          localStorage.setItem("x-auth", res.data.innerData.token)
          dispatch({ type: "LOG_IN", payload: res.data.innerData.admin })
          navigate("/admin")
          window.location.reload()
        };
      })
      .catch(err => {
        console.log(err?.response?.data?.msg)
        setError(err?.response?.data?.msg)
      })
  }


  return (
    <div className='login__container'>

      <div className="login__container-card-icon">
        <img src={logo} alt="" />
      </div>
      <form onSubmit={handleSignIn} className="login__container-card">
        <h2>Tzimga kirish</h2>
        <p className='login__container-error' style={{ opacity: error ? 1 : 0 }}> {error} </p>
        <span className='inp_bar'>
          <label htmlFor="">Username</label>
          <input required minLength={3} value={username} onChange={e => setUsername(e.target.value.trim().toLowerCase())} type="text" placeholder='username' />
        </span>
        <span className='inp_bar'>
          <label htmlFor="">Password</label>
          <input required minLength={4} value={password} onChange={e => setPassword(e.target.value.trim())} type="password" placeholder='password' />
        </span>
        <button>Login</button>
        <Link to={"/"} className="login__container__home">
          <p>Go To Home</p>
        </Link>
      </form>
    </div>

  )
}

export default Login