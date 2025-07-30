import { useEffect } from 'react';

interface PerformanceMonitor {
  onCLS?: (value: number) => void;
  onFID?: (value: number) => void;
  onFCP?: (value: number) => void;
  onLCP?: (value: number) => void;
  onTTFB?: (value: number) => void;
}

const PerformanceMonitor = ({ onCLS, onFID, onFCP, onLCP, onTTFB }: PerformanceMonitor) => {
  useEffect(() => {
    // Only run in production and if web vitals are supported
    if (process.env.NODE_ENV !== 'production' || !('PerformanceObserver' in window)) {
      return;
    }

    // Track Cumulative Layout Shift (CLS)
    if (onCLS) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          if (clsValue > 0) {
            onCLS(clsValue);
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.warn('CLS monitoring not supported');
      }
    }

    // Track First Input Delay (FID)
    if (onFID) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            onFID((entry as any).processingStart - entry.startTime);
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        console.warn('FID monitoring not supported');
      }
    }

    // Track First Contentful Paint (FCP)
    if (onFCP) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              onFCP(entry.startTime);
            }
          }
        });
        fcpObserver.observe({ type: 'paint', buffered: true });
      } catch (e) {
        console.warn('FCP monitoring not supported');
      }
    }

    // Track Largest Contentful Paint (LCP)
    if (onLCP) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          onLCP(lastEntry.startTime);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.warn('LCP monitoring not supported');
      }
    }

    // Track Time to First Byte (TTFB)
    if (onTTFB) {
      try {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          onTTFB(ttfb);
        }
      } catch (e) {
        console.warn('TTFB monitoring not supported');
      }
    }

    // Cleanup function
    return () => {
      // PerformanceObserver cleanup is automatic when component unmounts
    };
  }, [onCLS, onFID, onFCP, onLCP, onTTFB]);

  // This component doesn't render anything
  return null;
};

// Hook for easy performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Simple performance logging for production
      const logPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        console.log('Performance Metrics:', {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          ttfb: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.startTime,
        });
      };

      // Log after page load
      if (document.readyState === 'complete') {
        setTimeout(logPerformance, 0);
      } else {
        window.addEventListener('load', () => setTimeout(logPerformance, 0));
      }
    }
  }, []);
};

export default PerformanceMonitor;
