import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

// await createUserWithEmailAndPassword(auth, email, password);

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("User Created : ", userCredentials.user);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 to-purple-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Create Account 🚀
        </h2>
        <p className="text-center text-white/70 mb-6">Sign up to get started</p>

        <div className="space-y-4">
          {/* <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          /> */}

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
          <button
            className="w-full py-3 rounded-lg bg-gray-300 text-pink-400 font-semibold"
          >
          Wait a moment...
          </button>
          ) : 
          (
          <button
            className="w-full py-3 rounded-lg bg-white text-pink-600 font-semibold hover:bg-gray-200 transition cursor-pointer"
            onClick={handleSumbit}
          >
          Sign Up
          </button>
          )}
        </div>
        <p className="text-center text-red-700 font-bold text-lg mt-3">
          {error}
        </p>

        <p className="text-center text-white mt-6">
          Already have an account?
          <Link to="/" className="ml-2 font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
