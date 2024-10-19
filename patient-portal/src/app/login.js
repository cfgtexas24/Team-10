import React, { useState } from "react";


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password, isAdmin); 
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen bg-gradient-to-b from-[#A26B61] to-[#6C5846]">
      {}
      <h1 className="absolute top-4 left-6 text-4xl font-semibold text-[#6C5846] font-great-vibes">
        Abide AI
      </h1>

      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/assets/abide.png" alt="Abide Women's Health Services" className="w-32" />
        </div>

        <h1 className="text-2xl font-bold text-center mb-6 text-[#6C5846]">
          Sign in
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-[#6C5846] mb-2">
              Your email
            </label>
            <input
              type="text"
              id="email"
              placeholder="name@company.com"
              className="w-full p-3 rounded-lg border border-[#6C5846] focus:border-[#3A696E] focus:ring focus:ring-[#3A696E] focus:ring-opacity-50 transition-all duration-300 outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#6C5846] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-[#6C5846] focus:border-[#3A696E] focus:ring focus:ring-[#3A696E] focus:ring-opacity-50 transition-all duration-300 outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#A26B61] text-white font-bold shadow-md hover:bg-[#6C5846] transition-all duration-300 transform hover:scale-105"
          >
            Sign in
          </button>

          <p className="text-sm text-center font-light text-gray-500">
            Don’t have an account yet?{" "}
            <a href="#" className="font-semibold text-[#3A696E] hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
