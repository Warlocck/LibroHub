import React from 'react';

const Login = () => (
  <div>
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
);

export default Login;
