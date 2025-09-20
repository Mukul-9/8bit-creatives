import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import { PrimaryButton } from "./buttons";

const HeroSection = styled.section`
  color: ${colors.textPrimary};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 2;
`;

// Content container with glassmorphism and radial backgrounds
const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  padding: 3.5rem 3rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  margin: 2rem;
  overflow: hidden;
  transition: all 0.07s cubic-bezier(0.4, 0, 0.2, 1);

  /* Multiple radial gradients from different corners with randomization */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        ellipse 70% 50% at 15% 20%,
        rgba(236, 0, 140, 0.25) 0%,
        rgba(200, 0, 120, 0.12) 40%,
        transparent 80%
      ),
      radial-gradient(
        ellipse 60% 80% at 85% 15%,
        rgba(0, 255, 255, 0.2) 0%,
        rgba(0, 200, 255, 0.1) 35%,
        transparent 75%
      ),
    opacity: 0.7;
    transition: all 0.07s ease;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        ellipse 45% 60% at 35% 10%,
        rgba(255, 255, 255, 0.12) 0%,
        rgba(255, 255, 255, 0.06) 50%,
        transparent 80%
      ),
      radial-gradient(
        ellipse 65% 45% at 75% 25%,
        rgba(236, 0, 140, 0.18) 0%,
        rgba(200, 0, 120, 0.09) 40%,
        transparent 75%
      ),
      radial-gradient(
        ellipse 55% 70% at 10% 75%,
        rgba(0, 255, 255, 0.16) 0%,
        rgba(0, 200, 255, 0.08) 35%,
        transparent 70%
      ),
      radial-gradient(
        ellipse 70% 55% at 95% 90%,
        rgba(255, 242, 0, 0.2) 0%,
        rgba(255, 200, 0, 0.1) 40%,
        transparent 75%
      );
    opacity: 0.5;
    transition: all 0.07s ease;
    z-index: 2;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 900px;
  position: relative;
  z-index: 3;
  font-family: "Inter", sans-serif;

  .highlight {
    background: ${colors.gradients.textHighlight};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    &.magenta {
      background: ${colors.magenta};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &.yellow {
      background: ${colors.yellow};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &::after {
      content: "|";
      color: ${colors.magenta};
      animation: blink 1s infinite;
      margin-left: 2px;
    }
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.textSecondary};
  margin-bottom: 3rem;
  line-height: 1.6;
  text-align: center;
  position: relative;
  z-index: 3;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 3;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PartnersSection = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 2rem;
`;

const PartnersText = styled.p`
  color: ${colors.textMuted};
  font-size: 0.9rem;
  margin-bottom: 2rem;
  font-family: "Inter", sans-serif;
`;

const PartnersGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  opacity: 0.6;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const PartnerLogo = styled.div`
  color: ${colors.textMuted};
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;

  &:hover {
    color: ${colors.textSecondary};
  }
`;

const Hero = () => {
  const [currentText, setCurrentText] = useState("Creative Solutions");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect - Flawless looping with proper state management
  useEffect(() => {
    // Typing phrases
    const typingPhrases = [
      "Creative Solutions",
      "Fresh Perspectives",
      "Monetization Material",
    ];

    let timeoutId;

    const typeText = () => {
      const currentPhrase = typingPhrases[textIndex];

      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          timeoutId = setTimeout(typeText, 1);
        } else {
          // Finished typing, wait then start deleting
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setCurrentText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          timeoutId = setTimeout(typeText, 30);
        } else {
          // Finished deleting, move to next phrase immediately
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingPhrases.length);
          setCharIndex(0);
          timeoutId = setTimeout(typeText, 100); // Small delay before next phrase
        }
      }
    };

    timeoutId = setTimeout(typeText, 30);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [textIndex, isDeleting, charIndex]);

  // Static Pinterest-style layout - no flipping

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Determine color class based on current phrase index
  const getColorClass = () => {
    if (textIndex === 1) return "magenta"; // "Fresh Perspectives"
    if (textIndex === 2) return "yellow"; // "Monetization Material"
    return ""; // Default cyan for "Creative Solutions" (textIndex === 0)
  };

  return (
    <HeroSection id="hero">
      {/* Hero content */}
      <HeroContent>
        <HeroTitle>
          Transform Your Ideas Into <br />
          <span className={`highlight ${getColorClass()}`}>{currentText}</span>
        </HeroTitle>

        <HeroSubtitle>
          Unlock the full potential of your brand with our suite of <br />{" "}
          creative minds and expert digital solutions.
        </HeroSubtitle>

        <ButtonContainer>
          <PrimaryButton onClick={scrollToPortfolio} size="large" fullWidth>
            View Our Work
          </PrimaryButton>
        </ButtonContainer>

        <PartnersSection>
          <PartnersText>Powered By Top Industry Experts</PartnersText>
          <PartnersGrid>
            <PartnerLogo>Adobe</PartnerLogo>
            <PartnerLogo>Figma</PartnerLogo>
            <PartnerLogo>Webflow</PartnerLogo>
            <PartnerLogo>Shopify</PartnerLogo>
            <PartnerLogo>WordPress</PartnerLogo>
          </PartnersGrid>
        </PartnersSection>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
