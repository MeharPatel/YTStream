import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSumbit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const idToken = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        console.log("Logged in : ", idToken);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-white/70 mb-6">Login to your account</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            onChange={handleEmail}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            onChange={handlePassword}
          />

        {loading ? 
        (
          <button className="w-full py-3 rounded-lg bg-gray-300 text-pink-400 font-semibold">
            Wait a moment...
          </button>
        )
        :
        (
          <button className="w-full py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
          onClick={handleSumbit}
          >
            Login
          </button>
        )}
        </div>
        <p className="text-center text-red-700 font-bold text-lg mt-3">
          {error}
        </p>

        <p className="text-center text-white mt-6">
          Don’t have an account?
          <Link to="/signup" className="ml-2 font-semibold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
