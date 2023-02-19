// node modules
import { useEffect, useState } from 'react';

// local files
import { getWindowWidth } from '../utils/windowSize';

/**
 * Custom hook that detect when user is using screen width < 768 (mobile)
 * Using event listener on window windowSize.innerWidth
 */
function useDetectMobileScreenSize() {
  // state
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // set isMobileScreenSize in store true if window width < 768
    function handleWindowResize() {
      const screenWidth = getWindowWidth();
      if (screenWidth > 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    handleWindowResize();

    // set event listener for resizing screen
    window.addEventListener('resize', handleWindowResize);

    return () => {
      // clear event listener when unmount (optimization)
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isMobile]);

  return { isMobile };
}

export default useDetectMobileScreenSize;
