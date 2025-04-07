
import { useEffect, useRef } from "react";
import "../styles/bootstrap.min.css";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load and initialize external scripts after the HTML is injected
    const loadScripts = () => {
      // Bootstrap JS
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
      bootstrapScript.onload = () => {
        // After Bootstrap loads, load AOS library
        const aosScript = document.createElement('script');
        aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
        aosScript.onload = () => {
          // After AOS loads, load our custom scripts
          const customScript = document.createElement('script');
          customScript.src = 'src/js/scripts.js';
          document.body.appendChild(customScript);
        };
        document.body.appendChild(aosScript);
      };
      document.body.appendChild(bootstrapScript);
    };

    // Use a small delay to ensure the HTML is fully rendered
    setTimeout(loadScripts, 500);
    
    // Add window resize event listener to fix potential layout issues
    const handleResize = () => {
      // Force AOS refresh if it exists
      if (window.AOS) {
        window.AOS.refresh();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        margin: 0, 
        padding: 0, 
        width: "100vw", 
        minHeight: "100vh", 
        maxWidth: "none",
        overflow: "hidden"
      }}
      className="html-container"
      dangerouslySetInnerHTML={{ __html: '' }}
    ></div>
  );
};

export default Index;
