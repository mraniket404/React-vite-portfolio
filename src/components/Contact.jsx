import React, { useState, useRef } from 'react'

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [rocketVisible, setRocketVisible] = useState(false);
  const [parachuteVisible, setParachuteVisible] = useState(false);
  const [landingVisible, setLandingVisible] = useState(false);
  const formDataRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus("sending");
    
    // Store form data before hiding the form
    const formData = new FormData(e.target);
    formDataRef.current = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Step 1: Fold the form
    setFormVisible(false);
    
    // Wait for fold animation to complete
    setTimeout(() => {
      // Step 2: Show rocket launch
      setRocketVisible(true);
      
      // Send the form data
      sendFormData();
    }, 800);
  };

  const sendFormData = async () => {
    try {
      // Create FormData from stored data
      const formData = new FormData();
      formData.append('name', formDataRef.current.name);
      formData.append('email', formDataRef.current.email);
      formData.append('message', formDataRef.current.message);
      
      const response = await fetch('https://formspree.io/f/xgvnjqol', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Step 3: Rocket reaches peak and parachute deploys
        setTimeout(() => {
          setRocketVisible(false);
          setParachuteVisible(true);
          
          // Step 4: Landing sequence
          setTimeout(() => {
            setParachuteVisible(false);
            setLandingVisible(true);
            setMessageStatus("success");
            setShowPopup(true);
            
            // Step 5: Reset everything
            setTimeout(() => {
              setLandingVisible(false);
              setShowPopup(false);
              setIsSending(false);
              setMessageStatus("");
              setFormVisible(true);
              e.target.reset();
            }, 3000);
            
          }, 2000); // Parachute descent time
          
        }, 2000); // Rocket ascent time
        
      } else {
        throw new Error(`Formspree error: ${response.status}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessageStatus("error");
      setShowPopup(true);
      setRocketVisible(false);
      
      setTimeout(() => {
        setShowPopup(false);
        setIsSending(false);
        setMessageStatus("");
        setFormVisible(true);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-10 relative overflow-hidden py-10">
      
      {/* Success Popup */}
      {showPopup && (
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-6 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
          messageStatus === "success" 
            ? "bg-green-500/20 border-green-400/30 text-green-400 scale-100" 
            : "bg-red-500/20 border-red-400/30 text-red-400 scale-100"
        }`}>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">
              {messageStatus === "success" ? "🎯" : "❌"}
            </span>
            <div>
              <span className="font-bold text-lg block">
                {messageStatus === "success" ? "Mission Accomplished!" : "Launch Failed"}
              </span>
              <span className="text-sm">
                {messageStatus === "success" ? "Message successfully delivered to destination!" : "Please try again later."}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Rocket Launch Animation */}
      {rocketVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
          <div className="relative">
            {/* Rocket */}
            <div className="text-8xl animate-rocket-launch">
              🚀
            </div>
            
            {/* Rocket Fire */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-16 h-8 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full animate-fire-pulse"></div>
                <div className="w-12 h-6 bg-gradient-to-t from-red-500 to-orange-400 rounded-full animate-fire-pulse" style={{animationDelay: '0.1s'}}></div>
                <div className="w-8 h-4 bg-gradient-to-t from-yellow-400 to-orange-300 rounded-full animate-fire-pulse" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
            
            {/* Smoke Trail */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-gray-400/60 rounded-full animate-smoke-float"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${2 + i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 text-cyan-400 text-sm font-mono animate-pulse">
            LAUNCHING INTO SPACE...
          </div>
        </div>
      )}

      {/* Parachute Descent Animation */}
      {parachuteVisible && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40">
          <div className="relative animate-parachute-descent">
            {/* Parachute */}
            <div className="text-6xl animate-parachute-sway">
              🪂
            </div>
            
            {/* Package/Rocket Body */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-4xl">
              📦
            </div>
            
            {/* Connection Lines */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-white/60"></div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1 w-16 h-0.5 bg-white/40 rotate-45"></div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1 w-16 h-0.5 bg-white/40 -rotate-45"></div>
          </div>
          
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-cyan-400 text-sm font-mono animate-pulse">
            DESCENDING TO TARGET...
          </div>
        </div>
      )}

      {/* Landing Animation */}
      {landingVisible && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40">
          <div className="relative animate-landing-bounce">
            {/* Landed Package */}
            <div className="text-6xl">
              📬
            </div>
            
            {/* Success Effects */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-2 border-green-400 rounded-full animate-ping"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-green-300 rounded-full animate-pulse"></div>
            
            {/* Celebration Particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-celebration-float"
                style={{
                  left: `${Math.random() * 100 - 50}px`,
                  top: `${Math.random() * 50 - 100}px`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
          
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-green-400 text-sm font-mono font-bold animate-pulse">
            MESSAGE DELIVERED!
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="w-full max-w-lg relative z-10">
        <div className={`backdrop-blur-md bg-white/10 rounded-3xl border border-cyan-400/30 transition-all duration-700 ${
          formVisible 
            ? 'p-8 scale-100 opacity-100' 
            : 'p-0 scale-75 opacity-0 -translate-y-10'
        } ${isSending ? 'pointer-events-none' : ''}`}>
          
          {formVisible && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-3">
                <h2 className="text-4xl font-light tracking-tight text-cyan-400">
                  CONTACT
                </h2>
                <p className="text-cyan-300/70 text-sm tracking-wider">
                  LAUNCH YOUR MESSAGE
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-cyan-300/90">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-300 placeholder-cyan-300/50 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-cyan-300/90">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-300 placeholder-cyan-300/50 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-cyan-300/90">Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message..."
                    required
                    rows="4"
                    className="w-full p-3 rounded-lg bg-white/10 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-300 placeholder-cyan-300/50 resize-none text-sm"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-xl font-semibold text-lg bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300"></span>
                <span>LAUNCH MESSAGE</span>
              </button>
            </form>
          )}
          
          {/* Footer */}
          {formVisible && (
            <div className="text-center pt-4 border-t border-cyan-400/20 mt-6">
              <p className="text-cyan-300/50 text-xs">
                Complete mission sequence: Launch → Parachute → Delivery
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes rocket-launch {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            30% {
              transform: translate(-50%, -150%) scale(1.1);
              opacity: 1;
            }
            60% {
              transform: translate(-50%, -300%) scale(1);
              opacity: 0.9;
            }
            100% {
              transform: translate(-50%, -500%) scale(0.8);
              opacity: 0;
            }
          }
          
          @keyframes parachute-descent {
            0% {
              transform: translate(-50%, -100px) scale(0.8);
              opacity: 0;
            }
            20% {
              transform: translate(-50%, 100px) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, 80vh) scale(1);
              opacity: 1;
            }
          }
          
          @keyframes parachute-sway {
            0%, 100% {
              transform: translateX(0px) rotate(0deg);
            }
            25% {
              transform: translateX(-5px) rotate(-2deg);
            }
            75% {
              transform: translateX(5px) rotate(2deg);
            }
          }
          
          @keyframes landing-bounce {
            0% {
              transform: translateY(-20px) scale(1.2);
            }
            60% {
              transform: translateY(0px) scale(1);
            }
            80% {
              transform: translateY(-10px) scale(1.05);
            }
            100% {
              transform: translateY(0px) scale(1);
            }
          }
          
          @keyframes celebration-float {
            0% {
              transform: translateY(0) scale(0);
              opacity: 0;
            }
            50% {
              transform: translateY(-20px) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-40px) scale(0);
              opacity: 0;
            }
          }
          
          @keyframes fire-pulse {
            0%, 100% {
              transform: scaleY(1);
              opacity: 0.8;
            }
            50% {
              transform: scaleY(1.2);
              opacity: 1;
            }
          }
          
          @keyframes smoke-float {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-40px) scale(1.5);
              opacity: 0;
            }
          }
          
          .animate-rocket-launch {
            animation: rocket-launch 2s ease-out forwards;
          }
          
          .animate-parachute-descent {
            animation: parachute-descent 2s ease-in forwards;
          }
          
          .animate-parachute-sway {
            animation: parachute-sway 3s ease-in-out infinite;
          }
          
          .animate-landing-bounce {
            animation: landing-bounce 1s ease-out forwards;
          }
          
          .animate-celebration-float {
            animation: celebration-float 1.5s ease-out forwards;
          }
          
          .animate-fire-pulse {
            animation: fire-pulse 0.3s ease-in-out infinite;
          }
          
          .animate-smoke-float {
            animation: smoke-float 2s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Contact