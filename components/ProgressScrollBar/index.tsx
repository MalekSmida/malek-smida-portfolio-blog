// local files
import { useMesureVerticalScroll } from '../../hooks';

/**
 * Progress bar animation shown in top of page when scrolling
 */
function ProgressScrollBar() {
  const { scrollProgress } = useMesureVerticalScroll();
  return (
    <span
      className="fixed top-0 left-0 z-50 h-1 rounded-r bg-primary-color duration-300 ease-in-out"
      style={{
        width: `${scrollProgress}%`,
      }}
    ></span>
  );
}

export default ProgressScrollBar;
