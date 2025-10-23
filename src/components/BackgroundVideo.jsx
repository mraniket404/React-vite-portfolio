import React from 'react'

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20"></div>
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full w-auto h-auto object-cover"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto'
        }}
      >
        {/* CORRECT PATH - Remove "my-portfolio" */}
        <source src="/assets/background.mp4" type="video/mp4" />
        {/* Fallback text if video doesn't load */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated stars overlay */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundVideo