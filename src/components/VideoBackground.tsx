import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay fails
        console.log('Video autoplay failed');
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image with video fallback */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/hero-bg.jpg')`
        }}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        onError={() => {
          // Video failed to load, rely on background image
          console.log('Video failed to load, using background image');
        }}
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3d9&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <div className="absolute inset-0 video-overlay" />
    </div>
  );
};

export default VideoBackground;