import './App.css';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className='btn'>Toggle Theme</button>
      <h4><i class="fa-solid fa-person"></i>Amazing service</h4>
      <form>
        <h2>Login</h2>
        <div className="form-control">
          <label className='form'>Email</label><br></br><br></br>
          <input type="text" name="email" />
        </div><br></br>
        <div className="form-control">
          <label className='for'>Password</label><br></br><br></br>
          <input type="password" name="password" />
        </div>
        <div className="form-control">
          <label></label><br></br>
          <button type="submit">Login</button>
          <br></br>
          <br></br>
          <button className='lastb' type="submit">Create account </button>
        </div>
      </form>
    </div>
  );
}

