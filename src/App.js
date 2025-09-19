import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import colors from "./theme/colors";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: ${colors.background};
    color: ${colors.textPrimary};
    overflow-x: hidden;
    scroll-behavior: smooth;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }
  
  /* Global subtle glow background - MAGENTA ONLY */
  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: 
      radial-gradient(circle at 15% 25%, rgba(236, 0, 140, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 85% 15%, rgba(236, 0, 140, 0.03) 0%, transparent 45%),
      radial-gradient(circle at 25% 75%, rgba(236, 0, 140, 0.025) 0%, transparent 35%),
      radial-gradient(circle at 75% 85%, rgba(236, 0, 140, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(236, 0, 140, 0.025) 0%, transparent 60%),
      radial-gradient(circle at 30% 60%, rgba(236, 0, 140, 0.02) 0%, transparent 55%);
    pointer-events: none;
    z-index: 0;
    opacity: 0.8;
    animation: subtleGlow 8s ease-in-out infinite alternate;
  }
  
  @keyframes subtleGlow {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.02);
    }
    100% {
      opacity: 0.6;
      transform: scale(1.01);
    }
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${colors.backgroundCard};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${colors.gradients.primary};
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primaryHover};
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background};
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Hero />
        <Portfolio />
        <ContactUs />
        <FAQs />
      </AppContainer>
    </Router>
  );
}

export default App;
