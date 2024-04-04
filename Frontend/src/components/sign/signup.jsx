import React, { useState } from 'react';
import axios from 'axios';
import './SignupForm.css'; // Import CSS file for styling

function SignupForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { name, username, password });
      alert('Signup successful.');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Budgie</h1>
      <div className="signin-link">
        <a href="/signin">Sign in</a>
      </div>
      <div className="signup-form">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
