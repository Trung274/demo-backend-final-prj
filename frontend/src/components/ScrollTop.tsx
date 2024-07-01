import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

interface ScrollTopProps {} // Empty interface for props (optional)

const ScrollTop: React.FC<ScrollTopProps> = () => {
  const arrowRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 180) {
        arrowRef.current?.classList.add('right-10');
      } else {
        arrowRef.current?.classList.remove('right-10');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      <button
        aria-label="arrow"
        className={`w-[50px] h-[50px] fixed bottom-14 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-[#1caf57] hover:bg-[#20d769] active:p-[.45rem] p-2 rounded`}
        onClick={scrollToTop}
        ref={arrowRef}
      >
       <FontAwesomeIcon icon={faArrowUp} size="1x" className="text-white"/>
      </button>
    </div>
  );
};

export default ScrollTop;