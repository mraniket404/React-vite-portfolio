import React, { useState, useRef, useEffect } from "react";

const ContactSpace3D = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sceneRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus("sending");

    try {
      const formData = new FormData(formRef.current);
      
      const response = await fetch('https://formspree.io/f/xgvnjqol', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const id = Date.now();
        setSubmissions((prev) => [...prev, id]);
        setMessageStatus("success");
        formRef.current.reset();
        
        setTimeout(() => {
          setSubmissions((prev) => prev.filter((s) => s !== id));
          setIsSending(false);
          setMessageStatus("");
        }, 4000);
      } else {
        throw new Error(`Formspree error: ${response.status}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessageStatus("error");
      setTimeout(() => {
        setIsSending(false);
        setMessageStatus("");
      }, 3000);
    }
  };

  return (
    <section className=" min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 relative overflow-hidden">
      
      {/* Enhanced Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Nebula Background */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-900/5 via-purple-900/10 to-cyan-900/5 animate-nebula-flow"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-float-medium"></div>
        </div>

        {/* Enhanced Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full star"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 7}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Shooting Stars */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-1"></div>
        <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-shooting-star-2"></div>
      </div>

      {/* Left side - Enhanced Space Animation Scene */}
      <div className="hidden md:flex md:flex-1 justify-center items-center relative h-96" ref={sceneRef}>
        
        <div className="relative w-96 h-96">
          {/* Quantum Communication Ring */}
          <div className="absolute inset-0 animate-quantum-ring">
            <div className="w-80 h-80 border-2 border-cyan-400/40 rounded-full relative quantum-ring">
              <div className="absolute inset-0 border border-cyan-300/20 rounded-full animate-ping-slow"></div>
              <div className="absolute inset-4 border border-blue-400/30 rounded-full"></div>
              <div className="absolute inset-8 border border-purple-400/20 rounded-full"></div>
              
              {/* Energy Nodes */}
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 translate-y-1/2 animate-pulse-glow"></div>
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-y-1/2 -translate-x-1/2 animate-pulse-glow"></div>
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Central Holographic Display */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`relative w-32 h-32 bg-gradient-to-br from-gray-900/80 to-gray-800/90 rounded-2xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/30 backdrop-blur-xl flex items-center justify-center hologram-container ${
              messageStatus === "sending" ? 'animate-hologram-active' : 
              messageStatus === "success" ? 'animate-hologram-success' : 
              messageStatus === "error" ? 'animate-hologram-error' : 'animate-hologram-idle'
            }`}
                 style={{
                   transform: `rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg) scale(${1 + (isHovered ? 0.1 : 0)})`
                 }}>
              
              {/* Holographic Grid */}
              <div className="absolute inset-2 border border-cyan-400/10 rounded-lg grid-lines"></div>
              
              {/* Status Icon */}
              <div className="text-3xl relative z-10">
                {messageStatus === "sending" ? '🛰️' : 
                 messageStatus === "success" ? '✅' : 
                 messageStatus === "error" ? '❌' : '🌌'}
              </div>

              {/* Particle Effects */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-particle-1"></div>
                <div className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-particle-2"></div>
                <div className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-particle-3"></div>
              </div>
            </div>
          </div>

          {/* Data Packets Transmission */}
          {submissions.map((id, index) => (
            <div key={id} className={`absolute inset-0 animate-data-packet-${index % 3}`}>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg transform rotate-45 shadow-2xl shadow-cyan-500/60 backdrop-blur-sm border border-cyan-300/40 flex items-center justify-center relative">
                <div className="text-white text-xs font-bold transform -rotate-45">📦</div>
                <div className="absolute -inset-1 bg-cyan-400/20 rounded-lg blur-sm animate-pulse"></div>
              </div>
            </div>
          ))}

          {/* Orbiting Satellites */}
          <div className="absolute inset-0">
            <div className="absolute w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-lg shadow-cyan-500/20 animate-orbit-satellite-1">
              <div className="w-1 h-2 bg-cyan-400 absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute w-3 h-3 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full shadow-lg shadow-blue-500/20 animate-orbit-satellite-2">
              <div className="w-1 h-1 bg-blue-400 absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>

          {/* Status Display */}
          {messageStatus && (
            <div className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl font-mono text-sm border backdrop-blur-lg status-display ${
              messageStatus === "success" ? "status-success" :
              messageStatus === "error" ? "status-error" :
              "status-sending"
            }`}>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  messageStatus === "success" ? "bg-green-400" :
                  messageStatus === "error" ? "bg-red-400" :
                  "bg-cyan-400"
                }`}></div>
                <span>
                  {messageStatus === "sending" ? "QUANTUM ENCODING DATA..." :
                   messageStatus === "success" ? "TRANSMISSION COMPLETE" :
                   "SIGNAL LOST - RETRYING"}
                </span>
              </div>
            </div>
          )}

          {/* Cosmic Text */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-300/80 text-sm font-mono tracking-widest animate-text-glow">
            INTERSTELLAR COMMUNICATION
          </div>
        </div>
      </div>

      {/* Right side - Professional Space Form */}
      <div className="flex-1 max-w-md w-full relative z-10">
        <div 
          className="bg-gray-900/30 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-cyan-500/20 space-y-8 professional-form"
          style={{
            transform: `perspective(1200px) rotateX(${mousePosition.y * 4}deg) rotateY(${mousePosition.x * 4}deg) translateZ(${isHovered ? '20px' : '0px'})`
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
              <h2 className="text-5xl font-light tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent professional-title">
                CONTACT
              </h2>
              <p className="text-cyan-300/70 font-mono text-sm tracking-wider">
                INITIATE QUANTUM COMMUNICATION
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-cyan-300/90 font-mono tracking-wide uppercase">Your Identity</label>
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER FULL NAME"
                  required
                  className="w-full p-4 rounded-xl bg-gray-800/40 text-white border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-500 backdrop-blur-sm placeholder-gray-400 font-mono text-sm professional-input"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-cyan-300/90 font-mono tracking-wide uppercase">Communication Channel</label>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="w-full p-4 rounded-xl bg-gray-800/40 text-white border border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-500 backdrop-blur-sm placeholder-gray-400 font-mono text-sm professional-input"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-cyan-300/90 font-mono tracking-wide uppercase">Message Data</label>
                <textarea
                  name="message"
                  placeholder="ENTER YOUR MESSAGE..."
                  required
                  rows="6"
                  className="w-full p-4 rounded-xl bg-gray-800/40 text-white border border-purple-500/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-500 backdrop-blur-sm placeholder-gray-400 font-mono text-sm resize-none professional-textarea"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-5 rounded-2xl font-semibold text-lg tracking-widest transition-all duration-700 professional-button ${
                isSending 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-600/90 to-blue-600/90 hover:from-cyan-500 hover:to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95'
              } relative overflow-hidden group border border-cyan-500/30`}
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                {isSending ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>ENCRYPTING...</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl">⚡</span>
                    <span>INITIATE TRANSMISSION</span>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-20"></div>
            </button>
          </form>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-cyan-500/10">
            <p className="text-cyan-300/50 font-mono text-xs tracking-wider">
              SECURE QUANTUM ENCRYPTION • LIGHTSPEED DELIVERY
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Styles */}
      <style>
        {`
          .professional-form {
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(6, 182, 212, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          

          .professional-title {
            background-size: 200% 200%;
            animation: professional-gradient 6s ease infinite;
          }

          .professional-input, .professional-textarea {
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .professional-input:focus, .professional-textarea:focus {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.15);
          }

          .professional-button {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow: 0 10px 30px -5px rgba(6, 182, 212, 0.3);
          }

          .professional-button:hover:not(:disabled) {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px -5px rgba(6, 182, 212, 0.4);
          }

          .hologram-container {
            box-shadow: 
              0 0 60px rgba(6, 182, 212, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          .grid-lines {
            background-image: 
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }

          .quantum-ring {
            background: conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.3), transparent);
          }

          .status-display {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .status-sending {
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.1));
            border: 1px solid rgba(6, 182, 212, 0.3);
          }

          .status-success {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(21, 128, 61, 0.1));
            border: 1px solid rgba(34, 197, 94, 0.3);
          }

          .status-error {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(185, 28, 28, 0.1));
            border: 1px solid rgba(239, 68, 68, 0.3);
          }

          .star {
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
          }

          @keyframes professional-gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes nebula-flow {
            0%, 100% { transform: translateX(0px) translateY(0px); }
            33% { transform: translateX(30px) translateY(-20px); }
            66% { transform: translateX(-20px) translateY(30px); }
          }

          @keyframes quantum-ring {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.05); }
            100% { transform: rotate(360deg) scale(1); }
          }

          @keyframes hologram-idle {
            0%, 100% { transform: translateY(0px) rotateX(0deg); }
            50% { transform: translateY(-10px) rotateX(5deg); }
          }

          @keyframes hologram-active {
            0%, 100% { 
              box-shadow: 0 0 60px rgba(6, 182, 212, 0.4),
                         inset 0 1px 0 rgba(255, 255, 255, 0.3);
            }
            50% { 
              box-shadow: 0 0 80px rgba(6, 182, 212, 0.6),
                         inset 0 1px 0 rgba(255, 255, 255, 0.4);
            }
          }

          @keyframes hologram-success {
            0%, 100% { 
              box-shadow: 0 0 60px rgba(34, 197, 94, 0.4);
            }
            50% { 
              box-shadow: 0 0 80px rgba(34, 197, 94, 0.6);
            }
          }

          @keyframes hologram-error {
            0%, 100% { 
              box-shadow: 0 0 60px rgba(239, 68, 68, 0.4);
            }
            50% { 
              box-shadow: 0 0 80px rgba(239, 68, 68, 0.6);
            }
          }

          @keyframes data-packet-0 {
            0% { transform: rotate(0deg) translateX(160px) rotate(0deg) scale(0.8); opacity: 0; }
            20% { transform: rotate(72deg) translateX(160px) rotate(-72deg) scale(1); opacity: 1; }
            80% { transform: rotate(288deg) translateX(160px) rotate(-288deg) scale(1); opacity: 0.8; }
            100% { transform: rotate(360deg) translateX(160px) rotate(-360deg) scale(0.8); opacity: 0; }
          }

          @keyframes data-packet-1 {
            0% { transform: rotate(120deg) translateX(160px) rotate(0deg) scale(0.8); opacity: 0; }
            20% { transform: rotate(192deg) translateX(160px) rotate(-72deg) scale(1); opacity: 1; }
            80% { transform: rotate(408deg) translateX(160px) rotate(-288deg) scale(1); opacity: 0.8; }
            100% { transform: rotate(480deg) translateX(160px) rotate(-360deg) scale(0.8); opacity: 0; }
          }

          @keyframes data-packet-2 {
            0% { transform: rotate(240deg) translateX(160px) rotate(0deg) scale(0.8); opacity: 0; }
            20% { transform: rotate(312deg) translateX(160px) rotate(-72deg) scale(1); opacity: 1; }
            80% { transform: rotate(528deg) translateX(160px) rotate(-288deg) scale(1); opacity: 0.8; }
            100% { transform: rotate(600deg) translateX(160px) rotate(-360deg) scale(0.8); opacity: 0; }
          }

          @keyframes orbit-satellite-1 {
            0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
          }

          @keyframes orbit-satellite-2 {
            0% { transform: rotate(180deg) translateX(150px) rotate(0deg); }
            100% { transform: rotate(540deg) translateX(150px) rotate(-360deg); }
          }

          @keyframes particle-1 {
            0%, 100% { transform: translate(0px, 0px); opacity: 0; }
            50% { transform: translate(10px, -15px); opacity: 1; }
          }

          @keyframes particle-2 {
            0%, 100% { transform: translate(0px, 0px); opacity: 0; }
            50% { transform: translate(-8px, 12px); opacity: 1; }
          }

          @keyframes particle-3 {
            0%, 100% { transform: translate(0px, 0px); opacity: 0; }
            50% { transform: translate(12px, 8px); opacity: 1; }
          }

          @keyframes shooting-star-1 {
            0% { transform: translateX(-100px) translateY(-100px) rotate(45deg); opacity: 0; }
            10% { transform: translateX(100px) translateY(100px) rotate(45deg); opacity: 1; }
            100% { transform: translateX(500px) translateY(500px) rotate(45deg); opacity: 0; }
          }

          @keyframes shooting-star-2 {
            0% { transform: translateX(-200px) translateY(0px) rotate(30deg); opacity: 0; }
            5% { transform: translateX(0px) translateY(100px) rotate(30deg); opacity: 1; }
            100% { transform: translateX(600px) translateY(300px) rotate(30deg); opacity: 0; }
          }

          @keyframes text-glow {
            0%, 100% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
            50% { text-shadow: 0 0 30px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.6); }
          }

          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
          }

          .animate-nebula-flow { animation: nebula-flow 20s ease-in-out infinite; }
          .animate-quantum-ring { animation: quantum-ring 8s linear infinite; }
          .animate-hologram-idle { animation: hologram-idle 4s ease-in-out infinite; }
          .animate-hologram-active { animation: hologram-active 2s ease-in-out infinite; }
          .animate-hologram-success { animation: hologram-success 2s ease-in-out infinite; }
          .animate-hologram-error { animation: hologram-error 2s ease-in-out infinite; }
          .animate-data-packet-0 { animation: data-packet-0 3s ease-in-out forwards; }
          .animate-data-packet-1 { animation: data-packet-1 3s ease-in-out forwards; }
          .animate-data-packet-2 { animation: data-packet-2 3s ease-in-out forwards; }
          .animate-orbit-satellite-1 { animation: orbit-satellite-1 12s linear infinite; }
          .animate-orbit-satellite-2 { animation: orbit-satellite-2 15s linear infinite; }
          .animate-particle-1 { animation: particle-1 3s ease-in-out infinite; }
          .animate-particle-2 { animation: particle-2 4s ease-in-out infinite; }
          .animate-particle-3 { animation: particle-3 5s ease-in-out infinite; }
          .animate-shooting-star-1 { animation: shooting-star-1 8s linear infinite; }
          .animate-shooting-star-2 { animation: shooting-star-2 12s linear infinite; animation-delay: 4s; }
          .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
          .animate-ping-slow { animation: ping-slow 3s ease-out infinite; }
          .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default ContactSpace3D;