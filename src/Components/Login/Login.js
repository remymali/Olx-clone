import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const history=useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim()).then(() => {
      history.push('/')
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <img className="logo" src={Logo} alt="Logo" />
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>
          <button className="login-button">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="/signup">Signup</a></p>
      </div>
    </div>
  );
}

export default Login;
