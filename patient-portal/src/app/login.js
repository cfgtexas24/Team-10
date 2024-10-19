import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Track if user is an admin

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onLogin(email, password, isAdmin); // Pass email, password, and isAdmin to onLogin
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full card">
        <h1 className="text-2xl font-bold text-center mb-6 text-balance">
          Sign in
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="label">
              Your email
            </label>
            <input
              type="text"
              id="email"
              placeholder="name@company.com"
              className="input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
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
            <label htmlFor="admin" className="label">
              Login as Admin
            </label>
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign in
          </button>

          <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
