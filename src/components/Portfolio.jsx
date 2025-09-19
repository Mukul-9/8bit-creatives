import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";

const PortfolioSection = styled.section`
  background: ${colors.background};
  color: ${colors.textPrimary};
  padding: 6rem 2rem;
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
        circle at 10% 30%,
        rgba(236, 0, 140, 0.04) 0%,
        transparent 55%
      ),
      radial-gradient(
        circle at 90% 70%,
        rgba(236, 0, 140, 0.03) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 50% 10%,
        rgba(236, 0, 140, 0.025) 0%,
        transparent 45%
      );
    pointer-events: none;
    z-index: 1;
    animation: portfolioGlow 7s ease-in-out infinite alternate;
  }

  @keyframes portfolioGlow {
    0% {
      opacity: 0.5;
      transform: translateY(0px);
    }
    100% {
      opacity: 0.8;
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Badge = styled.div`
  background: ${colors.glass.card};
  border: 1px solid ${colors.glass.border};
  border-radius: 20px;
  padding: 0.4rem 1rem;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textSecondary};
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &::before {
    content: "⚡";
    font-size: 0.9rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: "Inter", sans-serif;

  .highlight {
    background: ${colors.gradients.textHighlight};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${colors.textSecondary};
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: ${colors.glass.card};
  border: 1px solid ${colors.glass.borderLight};
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: ${colors.blur.medium};
  -webkit-backdrop-filter: ${colors.blur.medium};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${colors.glass.border};
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
    background: ${colors.glass.buttonHover};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${colors.gradients.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    background: ${(props) => {
      if (props.colorType === "yellow") return colors.gradients.primaryReverse;
      if (props.colorType === "magenta") return colors.gradients.diagonal;
      if (props.colorType === "cyan") return colors.gradients.primary;
      return colors.gradients.rainbow;
    }};
  }
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${(props) => {
    if (props.colorType === "yellow") return colors.glass.yellow;
    if (props.colorType === "magenta") return colors.glass.magenta;
    if (props.colorType === "cyan") return colors.glass.cyan;
    return colors.glass.primary;
  }};
  border: 1px solid ${colors.glass.borderLight};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};

  &:hover {
    background: ${(props) => {
      if (props.colorType === "yellow") return colors.yellow;
      if (props.colorType === "magenta") return colors.magenta;
      if (props.colorType === "cyan") return colors.cyan;
      return colors.primary;
    }};
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${colors.textPrimary};
  font-family: "Inter", sans-serif;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
  font-family: "Inter", sans-serif;
`;

const StatsSection = styled.div`
  background: ${colors.glass.card};
  border: 1px solid ${colors.glass.border};
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: ${colors.blur.large};
  -webkit-backdrop-filter: ${colors.blur.large};
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.gradients.glow};
    opacity: 0.05;
  }
`;

const StatsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${colors.textPrimary};
  position: relative;
  z-index: 2;
  font-family: "Inter", sans-serif;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  position: relative;
  z-index: 2;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => {
    if (props.colorType === "cyan") return colors.cyan;
    if (props.colorType === "magenta") return colors.magenta;
    if (props.colorType === "yellow") return colors.yellow;
    return colors.primary;
  }};
  margin-bottom: 0.5rem;
  font-family: "Inter", sans-serif;
  text-shadow: ${(props) => {
    if (props.colorType === "cyan") return "0 0 10px rgba(0, 164, 228, 0.5)";
    if (props.colorType === "magenta") return "0 0 10px rgba(236, 0, 140, 0.5)";
    if (props.colorType === "yellow") return "0 0 10px rgba(255, 242, 0, 0.5)";
    return "none";
  }};
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  font-family: "Inter", sans-serif;
`;

const services = [
  {
    icon: "🎨",
    title: "Creative Design",
    description:
      "Innovative visual designs across all digital touchpoints with modern aesthetics and user-centered approach.",
    colorType: "yellow",
  },
  {
    icon: "📊",
    title: "Brand Analytics",
    description:
      "Track your brand's performance in real-time with comprehensive data analysis and actionable insights.",
    colorType: "magenta",
  },
  {
    icon: "⏰",
    title: "Project Optimization",
    description:
      "Streamline your creative workflow with key metrics like time-to-market and conversion optimization.",
    colorType: "cyan",
  },
];

const Portfolio = () => (
  <PortfolioSection id="portfolio">
    <Container>
      <Badge>Take Full Control of Your Brand</Badge>

      <SectionTitle>
        Creative <span className="highlight">Solutions</span>
      </SectionTitle>

      <SectionSubtitle>
        Our clients love how 8BitCreatives simplifies their creative processes
        and streamlines operations
      </SectionSubtitle>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} colorType={service.colorType}>
            <ServiceIcon colorType={service.colorType}>
              {service.icon}
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <StatsSection>
        <StatsTitle>Improved decision-making</StatsTitle>
        <StatsGrid>
          <StatItem>
            <StatNumber colorType="cyan">85%</StatNumber>
            <StatLabel>Improved decision-making</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber colorType="magenta">92%</StatNumber>
            <StatLabel>Client satisfaction</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber colorType="yellow">150+</StatNumber>
            <StatLabel>Projects completed</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>
    </Container>
  </PortfolioSection>
);

export default Portfolio;
