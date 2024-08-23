import React, { useState } from 'react';
import Header_2 from './Header_2';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div>
         <Header_2/>
      <div className="container">
      <div className="text">
         Login
      </div>
      <form onSubmit={handleSubmit}>
      <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="first name"></label>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="name_i"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        </div>
        </div>
        <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="name_i"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        </div>
        </div>
        <button className="button" type="submit">Login</button>
        </form>
      </div>
      </div>
  );
};

export default Login;
