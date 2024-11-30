import React from "react";
import { useNavigate } from 'react-router-dom';
import tic from "../assets/icons/tic-tac-toe-svgrepo-com.svg";
import snake from "../assets/icons/snake-svgrepo-com.svg";
import flag from "../assets/icons/flag-zw-svgrepo-com.svg";

function Home() {

    const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-radial from-gray-800 to-black flex flex-col p-8 text-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">👋 Hello, User!</h1>
        <p>Welcome to the Game Hub.</p>
      </div>

      {/* Squares Section */}
      <div className="flex-1 flex justify-center items-center mb-24">
        <div className="flex flex-wrap justify-center gap-8 w-[60vh]">
          <div onClick={() => navigate('/tic-tac-toe')} className="w-32 h-32 border-2 rounded-xl flex items-center justify-center transition transform cursor-pointer hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,0,0.8)]">
            <img src={tic} alt="Tic Tac Toe Icon" className="w-16 h-16" />
          </div>
          <div onClick={() => navigate('/snake')} className="w-32 h-32 border-2 rounded-xl flex items-center justify-center transition transform cursor-pointer hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,0,0.8)]">
            <img src={snake} alt="Snake Icon" className="w-24 h-24" />
          </div>
          <div onClick={() => navigate('/flag')} className="w-32 h-32 border-2 rounded-xl flex items-center justify-center transition transform cursor-pointer hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,0,0.8)]">
            <img src={flag} alt="Flag Icon" className="w-24 h-24" />
          </div>
          <div className="w-32 h-32 border-2 rounded-xl flex items-center justify-center transition transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,0,0.8)]"></div>
          <div className="w-32 h-32 border-2 rounded-xl flex items-center justify-center transition transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,0,0.8)]"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
