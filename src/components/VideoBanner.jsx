import { useState, useEffect } from 'react';
import eidVideo from '../assets/Eid-Video.mp4';
import { IoClose } from 'react-icons/io5';

const VideoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleClose = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

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
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-500 ease-in-out md:hidden ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div 
        className={`fixed bottom-30 md:bottom-10 right-4 z-50 w-[215px] h-[382px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 ease-in-out ${
          isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        } md:right-4 md:left-auto left-1/2 md:translate-x-0 -translate-x-1/2`}
      >
        <div className="w-full h-full flex items-center justify-center bg-black/5 relative">
          <button 
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors duration-200"
          >
            <IoClose size={20} />
          </button>
          <video
            autoPlay
            muted
            playsInline
            src={eidVideo}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default VideoBanner; 