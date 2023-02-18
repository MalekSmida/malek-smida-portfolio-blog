// node modules
import { useState, useEffect } from 'react';

function ProgressScrollBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setProgress(0);
        return;
      }

      const pageHeight = document.body.offsetHeight;
      const screenHeight = window.screen.height;

      // 0 < scrollRate < 1
      const scrollRate = (scrollPosition + screenHeight) / pageHeight;

      // make screenheight proportionel to the scroll position
      const screenHeightByRate = screenHeight * scrollRate;

      const finalEquation = ((scrollPosition + screenHeightByRate) / pageHeight) * 100;

      setProgress(finalEquation);
    });
  });

  return (
    <span
      className="fixed top-0 left-0 h-1 rounded-r bg-primary-color z-50 ease-in-out duration-300"
      style={{
        width: `${progress}%`
      }}></span>
  );
}

export default ProgressScrollBar;
