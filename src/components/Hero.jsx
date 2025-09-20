import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import colors from "../theme/colors";
import { PrimaryButton, SecondaryButton } from "./buttons";

const HeroSection = styled.section`
  background: transparent;
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

// Content container with glassmorphism
const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  margin: 2rem;
`;

const Badge = styled.div`
  background: ${colors.glass.card};
  border: 1px solid ${colors.glass.border};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textSecondary};
  font-size: 0.85rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &::before {
    content: "🔥";
    font-size: 0.9rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 900px;
  position: relative;
  z-index: 2;
  font-family: "Inter", sans-serif;

  .highlight {
    background: ${colors.gradients.textHighlight};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

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
    51%,
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
  z-index: 2;
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
  z-index: 2;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PartnersSection = styled.div`
  position: relative;
  z-index: 2;
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
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing phrases
  const typingPhrases = [
    "Creative Solutions",
    "Fresh Perspectives",
    "Monetization Material",
  ];

  // Typing effect - Flawless looping with proper state management
  useEffect(() => {
    let timeoutId;

    const typeText = () => {
      const currentPhrase = typingPhrases[textIndex];

      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          timeoutId = setTimeout(typeText, 80);
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
          timeoutId = setTimeout(typeText, 50);
        } else {
          // Finished deleting, move to next phrase immediately
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingPhrases.length);
          setCharIndex(0);
          timeoutId = setTimeout(typeText, 100); // Small delay before next phrase
        }
      }
    };

    timeoutId = setTimeout(typeText, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [textIndex, isDeleting, charIndex, typingPhrases]);

  // Static Pinterest-style layout - no flipping

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection id="hero">
      {/* Hero content */}
      <HeroContent>
        <HeroTitle>
          Transform Your Ideas Into <br />
          <span className="highlight">
            {currentText || "Creative Solutions"}
          </span>
        </HeroTitle>
    
        <HeroSubtitle>
          Unlock the full potential of your brand with our suite of <br />{" "}
          creative design tools and expert digital solutions.
        </HeroSubtitle>

        <ButtonContainer>
          <PrimaryButton onClick={scrollToPortfolio} size="large" fullWidth>
            View Our Work
          </PrimaryButton>
          <SecondaryButton onClick={scrollToContact} size="large" fullWidth>
            Talk to Sales
          </SecondaryButton>
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
