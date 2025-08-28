import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log('Video element found, attempting to play...');
      const video = videoRef.current;
      
      video.addEventListener('loadstart', () => console.log('Video started loading'));
      video.addEventListener('canplay', () => console.log('Video can start playing'));
      video.addEventListener('playing', () => console.log('Video is playing'));
      video.addEventListener('error', (e) => console.error('Video error:', e));
      
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadStart={() => console.log('Video load started')}
        onCanPlay={() => console.log('Video can play')}
        onPlay={() => console.log('Video started playing')}
        onError={(e) => {
          console.error('Video element error:', e);
        }}
      >
        {/* Urban streetwear aesthetic videos */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-young-people-walking-on-the-street-4702-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-1209-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-man-walking-in-the-city-4703-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 video-overlay" />
    </div>
  );
};

export default VideoBackground;