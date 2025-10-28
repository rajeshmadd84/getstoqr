import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics only if consent is given
    const initializeGA = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-64B9KSVSC6`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-64B9KSVSC6');
    };

    // Check if Usercentrics is loaded and consent is given
    if (window.UC_UI) {
      window.UC_UI.isInitialized().then(() => {
        window.UC_UI.getServicesBaseInfo().then((services) => {
          const analyticsService = services.find(service => service.id === 'google-analytics');
          if (analyticsService && analyticsService.consent) {
            initializeGA();
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    // Track page views only if consent is given
    if (window.gtag && window.UC_UI) {
      window.UC_UI.getServicesBaseInfo().then((services) => {
        const analyticsService = services.find(service => service.id === 'google-analytics');
        if (analyticsService && analyticsService.consent) {
          window.gtag('event', 'page_view', {
            page_path: location.pathname + location.search,
            page_title: document.title
          });
        }
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics; 