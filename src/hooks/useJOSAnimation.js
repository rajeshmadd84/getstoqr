import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JOS from 'jos-animation';

// Custom hook for initializing JOS animations
const useJOSAnimation = () => {
  const location = useLocation();
  useEffect(() => {
    JOS.init({
      passive: false,
      once: true,
      animation: 'fade-up',
      timingFunction: 'ease',
      threshold: 0,
      delay: 0.5,
      duration: 0.7,
      scrollDirection: 'down',
      rootMargin: '0% 0% 15% 0%',
    });
  }, []);

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Wait for the page to render, then scroll to the hash element
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
    JOS.refresh();
  }, [location.pathname, location.hash]);
};

export default useJOSAnimation;
