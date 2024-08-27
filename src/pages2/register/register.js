import React, { useState } from 'react';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setFormData(prevState => ({ ...prevState, error: "Passwords don't match" }));
    } else {
      fetch('http://localhost:2000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: formData.userName,
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        })
      })
      .then((response) => response.json())
      .then((data) => {
        alert("User Created!!");
        console.log('Response:', data);
        // Reset form data on success
        setFormData({
          userName: '',
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
          error: ''
        });
      })
      .catch(error => {
        alert("Not Created");
        console.error('Error:', error);
      });
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
        </div>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {formData.error && <p style={{ color: 'red' }}>{formData.error}</p>}
    </div>
  );
}

export default Register;
