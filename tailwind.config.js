/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    width: {
      150: "150px",
      190: "190px",
      225: "225px",
      275: "275px",
      300: "300px",
      340: "340px",
      350: "350px",
      375: "375px",
      460: "460px",
      656: "656px",
      880: "880px",
      508: "508px",
    },
    animation: {
      marquee: 'marquee 25s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      }
    },
    
    content: {
      brush: "url('./assets/profile.jpg')",
      
    },
    height: {
      80: "80px",
      150: "150px",
      175:"209px",
      225: "225px",
      300: "300px",
      340: "340px",
      370: "370px",
      420: "420px",
      510: "510px",
      600: "600px",
      650: "650px",
      685: "685px",
      800: "800px",
      "90vh": "90vh",
    },
    minWidth: {
      210: "210px",
      350: "350px",
      620: "620px",
    },
    colors: {
    none:"display:none",
      headingColor: "#524646",
      textColor: "#dfb56b",
      cartNumBg: "#e80013",
      primary: "#000",
      bgColor:" #3c3c3c;",
      cardOverlay: "rgba(256,256,256,0.4)",
      darkOverlay: "rgba(0,0,0,0.5)",
      lightOverlay: "rgba(256,256,256,0.2)",
      lighttextGray: "#9ca0ab",
      card: "rgba(256,256,256,0.8)",
      cartBg: "#282a2c",
      cartItem: "#2e3033",
      cartTotal: "#343739",
      loaderOverlay: "rgba(256,256,256,0.1)",
    },
    animation: {
      bounce200: 'bounce 1s infinite 200ms',
      bounce400: 'bounce 1s infinite 400ms',
    },
  },
};
export const plugins = [];
// tailwind.config.js
