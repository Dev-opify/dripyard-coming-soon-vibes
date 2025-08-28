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
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg"
      >
        {/* Using a dark, urban video URL - in production you'd replace with actual video */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-1209-large.mp4" type="video/mp4" />
        {/* Fallback background */}
        <div className="absolute inset-0 bg-background" />
      </video>
      <div className="absolute inset-0 video-overlay" />
    </div>
  );
};

export default VideoBackground;