import React, { useRef } from 'react';
import gsap from 'gsap'; // Make sure gsap is installed: npm install gsap
import { useGSAP } from '@gsap/react'; // Make sure @gsap/react is installed: npm install @gsap/react

function Cursor() {
    const cursorRef = useRef(null); // Initialize with null

    // useGSAP hook for GSAP animations in React
    useGSAP(() => {
        // Ensure the cursorRef.current exists before trying to animate it
        if (!cursorRef.current) return;

        // Set initial position to prevent flash at (0,0) before first move
        // Also center the div using xPercent/yPercent so its center is at mouse coords
        gsap.set(cursorRef.current, {
            x: window.innerWidth / 2, // Start in middle of screen horizontally
            y: window.innerHeight / 2, // Start in middle of screen vertically
            xPercent: -50, // Shift left by half its width
            yPercent: -50, // Shift up by half its height
        });

        const moveCursor = (e) => {
            // Animate the cursor to the mouse's current X and Y coordinates
            // Remove delay for immediate following
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                // Using xPercent/yPercent to center the div on the cursor,
                // which was set in gsap.set initially.
                // Duration for smoothness, no delay for direct follow.
                duration: 0.1, // Small duration for a very subtle, smooth follow (adjust as needed)
                ease: "power2.out" // A nice ease for cursor following
            });
        };

        // Add event listener for mouse movement on the window
        window.addEventListener("mousemove", moveCursor);

        // Cleanup function: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
        {/*
          Attach the cursorRef to this div.
          Add pointer-events: none; so the custom cursor doesn't block clicks
          on elements underneath it.
          Set a higher z-index to ensure it stays on top of other content.
        */}
        <div
            ref={cursorRef}
            style={{
                height: "5vh",
                width: "3vw",
                backgroundColor: "transparent",
                position: "fixed", // Use 'fixed' to position relative to viewport
                pointerEvents: "none", // Allows clicks to pass through
                zIndex: 9999, // Ensure it's on top
                 // Make it circular (optional)
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                color: "white", 
                fontSize: "0.8vw", 
                fontWeight: "bold",
            }}
        >
            {/* The content inside the custom cursor */}
            <h2 style={{position:"relative" , top:"-80px", right:"15px"}}>scroll</h2>
        </div>
    </div>
  )
}

export default Cursor;
