import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";
import { Analytics } from '@vercel/analytics/react';

import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/Home";
import { useEffect } from "react";
import ReactGA from "react-ga";
// import Footer from "./components/organs/Footer";

const TRACKING_ID = 'G-YECCEHHJB7';
ReactGA.initialize(TRACKING_ID);

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-VPCCL6W4YR"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-VPCCL6W4YR');
// </script>

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Analytics />
      {/* <Footer /> */}
    </div>
  )
}

export default App
