import { useState, useEffect } from 'react';
import eidVideo from '../assets/Eid-Video.mp4';

const VideoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      // Wait for fade out animation to complete before removing from DOM
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // 500ms for fade out animation
    }, 14500); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-30 right-4 z-50 w-[215px] h-[382px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 ease-in-out ${
        isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="w-full h-full flex items-center justify-center bg-black/5">
        <video
          autoPlay
          muted
          playsInline
          src={eidVideo}
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default VideoBanner; 