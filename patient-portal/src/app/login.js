import React, { useState } from "react";
import './globals.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Track if user is an admin

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onLogin(email, password, isAdmin); // Pass email, password, and isAdmin to onLogin
  };

  return (
    <section className="flex justify-center items-center min-h-screen login-bg">
      <div className="max-w-md w-full bg-white bg-opacity-90 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6" style={{ color: '#ec8f7b' }}>
          Sign in
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Your email
            </label>
            <input
              type="text"
              id="email"
              placeholder="name@company.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              style={{ 
                borderColor: '#ec8f7b',  // Border color
                color: '#000',            // Input text color (black)
                backgroundColor: '#fff'   // Input background color (white)
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              style={{ 
                borderColor: '#ec8f7b',  // Border color
                color: '#000',            // Input text color (black)
                backgroundColor: '#fff'   // Input background color (white)
              }}
            />
          </div>

          {/* Checkbox for admin status */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="admin"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)} // Update isAdmin state
              className="mr-2"
            />
            <label htmlFor="admin" className="text-gray-700">
              Login as Admin
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full py-2 rounded-lg transition"
            style={{ backgroundColor: '#ec8f7b', color: '#fff' }} // Button background and text color
          >
            Sign in
          </button>

          <p className="text-sm text-center font-light text-gray-500">
            Don’t have an account yet?{" "}
            <a href="#" className="font-semibold" style={{ color: '#ec8f7b' }}>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
