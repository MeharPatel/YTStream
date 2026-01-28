import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 to-purple-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
        
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Create Account 🚀
        </h2>
        <p className="text-center text-white/70 mb-6">
          Sign up to get started
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

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
            className="w-full py-3 rounded-lg bg-white text-pink-600 font-semibold hover:bg-gray-100 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-white mt-6">
          Already have an account?
          <Link
            to="/"
            className="ml-2 font-semibold underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}