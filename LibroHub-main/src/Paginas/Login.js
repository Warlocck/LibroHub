import React from 'react'
import './Login.css';

const Login = () => (
  <div className="login-container">
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Usuario:
          <input type="text" name="username" />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
);

export default Login;