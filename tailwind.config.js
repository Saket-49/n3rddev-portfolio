// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // <-- THIS IS THE MOST IMPORTANT LINE for React components
                                  // This glob pattern covers all .js, .ts, .jsx, .tsx files
                                  // within your 'src' directory (where your Header.jsx likely resides).
    // If your Header.jsx is in a different top-level folder (e.g., directly in 'n3rddev'),
    // you would need to add that path too, e.g., "./n3rddev/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
}