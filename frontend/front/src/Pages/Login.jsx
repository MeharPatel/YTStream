import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
        
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-white/70 mb-6">
          Login to your account
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            className="w-full py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white mt-6">
          Don’t have an account?
          <Link
            to="/signin"
            className="ml-2 font-semibold underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}