import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import { PrimaryButton, SecondaryButton } from "./buttons";

const HeroSection = styled.section`
  background: ${colors.background};
  color: ${colors.textPrimary};
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(236, 0, 140, 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(236, 0, 140, 0.04) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(236, 0, 140, 0.03) 0%,
        transparent 70%
      ),
      ${colors.gradients.glow};
    pointer-events: none;
    z-index: 1;
    animation: heroGlow 6s ease-in-out infinite alternate;
  }

  @keyframes heroGlow {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.9;
    }
  }
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
  max-width: 600px;
  line-height: 1.6;
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
      <Badge>Creative Solutions</Badge>

      <HeroTitle>
        Transform Your Ideas Into{" "}
        <span className="highlight">Creative Solutions</span>
      </HeroTitle>

      <HeroSubtitle>
        Unlock the full potential of your brand with our suite of creative
        design tools and expert digital solutions.
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
        <PartnersText>Partnering with top industry experts</PartnersText>
        <PartnersGrid>
          <PartnerLogo>Adobe</PartnerLogo>
          <PartnerLogo>Figma</PartnerLogo>
          <PartnerLogo>Webflow</PartnerLogo>
          <PartnerLogo>Shopify</PartnerLogo>
          <PartnerLogo>WordPress</PartnerLogo>
        </PartnersGrid>
      </PartnersSection>
    </HeroSection>
  );
};

export default Hero;
