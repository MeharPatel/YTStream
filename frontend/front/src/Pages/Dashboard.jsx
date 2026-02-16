import { useState, useEffect } from 'react';
import api from "../API/api";

export default function Dashboard() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");
    const [streamToken, setStreamToken] = useState("");

  // State to control the visibility of the popup
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [youtubeLink, setYoutubeLink] = useState('');

  // Hide the popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setYoutubeLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
        try{
            const res = await api.post("/stream-token", {
                videoid: "video123",
            }, {
                header: {
                    Authorization: "Token" //`Bearer ${userToken}`
                }
            });
            setResponse(res);
            setStreamToken(res.data);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      {/* Popup Overlay */}
      {isPopupVisible && (
        <div className="absolute top-0 left-0 w-full h-full bg-red-400 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              🎉 Logged in successfully!
            </h2>
            <p className="text-center text-white/70 mb-6">
              Paste your YouTube link to proceed!
            </p>
          </div>
        </div>
      )}

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Paste Your YouTube Link Here
        </h2>
        <p className="text-center text-white/70 mb-6">
          Enter a valid YouTube URL to proceed
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Paste your YouTube link"
            value={youtubeLink}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
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
            onClick={handleSubmit}
            >
                Submit
            </button>
            )}
        </div>
        <p className="text-center text-red-700 font-bold text-lg mt-3">
          {error}
        </p>

        <p className="text-center text-white mt-6">
          Don’t have a YouTube link yet? Just paste it here!
        </p>
      </div>
    </div>
  );
};