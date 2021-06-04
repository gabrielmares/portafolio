import { useState, useEffect } from "react";
// Define general type for useWindowSize hook, which includes width and height

// Usage
export function useWindow() {
    const { width, height } = useWindowSize();
    return {
        width,
        height
    };
}
// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.scrollX,
                height: window.scrollY,
            });
        }
        // Add event listener
        window.addEventListener("scroll", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}