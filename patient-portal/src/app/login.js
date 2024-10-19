import React from "react";

const Login = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full card">
        <h1 className="text-2xl font-bold text-center mb-6 text-balance">
          Sign in to your account
        </h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              className="input"
              required
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
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="label">Remember me</span>
            </label>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
              Forgot password?
            </a>
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
