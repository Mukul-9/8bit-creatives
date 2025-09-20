import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";

const PortfolioSection = styled.section`
  background: transparent;
  color: ${colors.textPrimary};
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    // content: "";
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

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: "Inter", sans-serif;

  .highlight {
    background: ${colors.magenta};
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
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  border-radius: 20px;
  // background: ${colors.glass.card};
  background: rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  transition: all 0.07s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1),
  width: 300px;
  min-height: 200px;
  flex: 1;
  max-width: 350px;

  /* Top right gradient effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse 80% 60% at 100% 0%,
      ${(props) => {
        if (props.colorType === "cyan") return "rgba(0, 255, 255, 0.3)";
        if (props.colorType === "magenta") return "rgba(236, 0, 140, 0.3)";
        if (props.colorType === "yellow") return "rgba(255, 242, 0, 0.3)";
        return "rgba(255, 165, 0, 0.3)";
      }}
        0%,
      ${(props) => {
        if (props.colorType === "cyan") return "rgba(0, 200, 255, 0.15)";
        if (props.colorType === "magenta") return "rgba(200, 0, 120, 0.15)";
        if (props.colorType === "yellow") return "rgba(255, 200, 0, 0.15)";
        return "rgba(255, 165, 0, 0.15)";
      }}
        40%,
      transparent 80%
    );
    opacity: 0.6;
    transition: all 0.07s ease;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    z-index: 10;

    /* Enhanced top right gradient on hover */
    &::after {
      opacity: 0.8;
      background: radial-gradient(
        ellipse 90% 70% at 100% 0%,
        ${(props) => {
          if (props.colorType === "cyan") return "rgba(0, 255, 255, 0.5)";
          if (props.colorType === "magenta") return "rgba(236, 0, 140, 0.5)";
          if (props.colorType === "yellow") return "rgba(255, 242, 0, 0.5)";
          return "rgba(255, 165, 0, 0.5)";
        }}
          0%,
        ${(props) => {
          if (props.colorType === "cyan") return "rgba(0, 200, 255, 0.25)";
          if (props.colorType === "magenta") return "rgba(200, 0, 120, 0.25)";
          if (props.colorType === "yellow") return "rgba(255, 200, 0, 0.25)";
          return "rgba(255, 165, 0, 0.25)";
        }}
          30%,
        transparent 60%
      );
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    flex: none;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => {
    if (props.colorType === "yellow") return "rgba(255, 242, 0, 0.1)";
    if (props.colorType === "magenta") return "rgba(236, 0, 140, 0.1)";
    if (props.colorType === "cyan") return "rgba(0, 164, 228, 0.1)";
    return "rgba(0, 164, 228, 0.1)";
  }};
  border: 1px solid
    ${(props) => {
      if (props.colorType === "yellow") return "rgba(255, 242, 0, 0.3)";
      if (props.colorType === "magenta") return "rgba(236, 0, 140, 0.3)";
      if (props.colorType === "cyan") return "rgba(0, 164, 228, 0.3)";
      return "rgba(0, 164, 228, 0.3)";
    }};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  transition: all 0.4s ease;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};
  position: relative;
  overflow: hidden;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => {
      if (props.colorType === "yellow")
        return "radial-gradient(circle, rgba(255, 242, 0, 0.2) 0%, transparent 70%)";
      if (props.colorType === "magenta")
        return "radial-gradient(circle, rgba(236, 0, 140, 0.2) 0%, transparent 70%)";
      if (props.colorType === "cyan")
        return "radial-gradient(circle, rgba(0, 164, 228, 0.2) 0%, transparent 70%)";
      return "radial-gradient(circle, rgba(0, 164, 228, 0.2) 0%, transparent 70%)";
    }};
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: scale(1.1) rotate(5deg);
    border-color: ${(props) => {
      if (props.colorType === "yellow") return "rgba(255, 242, 0, 0.6)";
      if (props.colorType === "magenta") return "rgba(236, 0, 140, 0.6)";
      if (props.colorType === "cyan") return "rgba(0, 164, 228, 0.6)";
      return "rgba(0, 164, 228, 0.6)";
    }};

    &::before {
      opacity: 1;
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: ${colors.textPrimary};
  font-family: "Inter", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 3;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
  font-family: "Inter", sans-serif;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 3;
`;

const StatsSection = styled.div`
  border-radius: 20px;
  padding: 1rem 3rem 3rem 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      background: linear-gradient(
        135deg,
        rgba(0, 164, 228, 0.08) 0%,
        rgba(236, 0, 140, 0.05) 50%,
        rgba(255, 242, 0, 0.03) 100%
      );
    }

    &::after {
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(0, 164, 228, 0.5) 25%,
        rgba(236, 0, 140, 0.5) 50%,
        rgba(255, 242, 0, 0.5) 75%,
        transparent 100%
      );
    }
  }
`;
const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;
const StatsTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${colors.textPrimary};

  .highlight {
    background: ${colors.magenta};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
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

// Pinterest-style Image Gallery
const ImageGallerySection = styled.div`
  margin-top: 4rem;
  position: relative;
  z-index: 2;
`;

// Laptop Browser Window - Dark Theme with Glassmorphism
const BrowserWindow = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  margin: 2rem 0;
  position: relative;
`;

const BrowserHeader = styled.div`
  background: linear-gradient(
    135deg,
    rgba(25, 25, 25, 0.67) 0%,
    rgba(26, 26, 26, 0.66) 100%
  );
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;
`;

const BrowserButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const BrowserButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ViewAllButton = styled.button`
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9) 0%,
    rgba(40, 40, 40, 0.8) 100%
  );
  margin: 1rem auto;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.07s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Inter", sans-serif;
  z-index: 20;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 164, 228, 0.1) 0%,
      rgba(236, 0, 140, 0.05) 50%,
      rgba(255, 242, 0, 0.03) 100%
    );
    opacity: 0.6;
    transition: all 0.3s ease;
    z-index: 1;
    border-radius: 50px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 164, 228, 0.3) 25%,
      rgba(236, 0, 140, 0.3) 50%,
      rgba(255, 242, 0, 0.3) 75%,
      transparent 100%
    );
    z-index: 2;
    border-radius: 50px;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    background: linear-gradient(
      135deg,
      rgba(35, 35, 35, 0.95) 0%,
      rgba(45, 45, 45, 0.85) 100%
    );

    &::before {
      opacity: 0.8;
      background: linear-gradient(
        90deg,
        rgba(0, 164, 228, 0.15) 0%,
        rgba(236, 0, 140, 0.08) 50%,
        rgba(255, 242, 0, 0.05) 100%
      );
    }

    &::after {
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(0, 164, 228, 0.5) 25%,
        rgba(236, 0, 140, 0.5) 50%,
        rgba(255, 242, 0, 0.5) 75%,
        transparent 100%
      );
    }
  }

  &:active {
    transform: translateX(-50%) translateY(0);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
`;

const BrowserTitle = styled.div`
  border-radius: 8px;
  padding: 0.5rem 1rem;
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  font-family: "Inter", sans-serif;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

const BrowserContent = styled.div`
  padding: 0;
  background: rgba(0, 0, 0, 0.2);
  height: auto;
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const PinterestMatrix = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  gap: 2rem;
  padding: 3rem;

  @media (max-width: 768px) {
    grid-auto-rows: 500px;
    gap: 0.8rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    grid-auto-rows: 400px;
    gap: 0.6rem;
    padding: 0.6rem;
  }
`;

// ViewAllButton removed - functionality moved to maximize button

const ImageCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.07s ease;
  height: 100%;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);


  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    z-index: 10;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.07s ease;
  border-radius: 16px;

  ${ImageCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

const ImageTitle = styled.h4`
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  font-family: "Inter", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const services = [
  {
    icon: "🎨",
    title: "Creative Design",
    description:
      "Innovative visual designs across all digital touchpoints with modern aesthetics and user-centered approach.",
    colorType: "cyan",
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
    colorType: "yellow",
  },
];

// Portfolio images data - Import images from assets
const portfolioImages = [
  {
    src: require("../assets/portfolio images/1975 press.jpg"),
    title: "1975 Press Campaign",
  },
  {
    src: require("../assets/portfolio images/boat.jpg"),
    title: "Boat Photography",
  },
  {
    src: require("../assets/portfolio images/chinese.jpg"),
    title: "Chinese Cuisine Design",
  },
  {
    src: require("../assets/portfolio images/christmas beer.png"),
    title: "Christmas Beer Branding",
  },
  {
    src: require("../assets/portfolio images/coffee.jpg"),
    title: "Coffee Brand Design",
  },
  {
    src: require("../assets/portfolio images/dogs 1.jpg"),
    title: "Pet Photography Series",
  },
  {
    src: require("../assets/portfolio images/dogs 2.jpg"),
    title: "Dog Portrait Collection",
  },
  {
    src: require("../assets/portfolio images/dogs 3.jpg"),
    title: "Canine Lifestyle Shoot",
  },
  {
    src: require("../assets/portfolio images/garnier.jpg"),
    title: "Garnier Brand Campaign",
  },
  {
    src: require("../assets/portfolio images/icecream.jpg"),
    title: "Ice Cream Branding",
  },
  {
    src: require("../assets/portfolio images/music.jpg"),
    title: "Music Album Design",
  },
  {
    src: require("../assets/portfolio images/nails.jpg"),
    title: "Nail Art Portfolio",
  },
  {
    src: require("../assets/portfolio images/nike.jpg"),
    title: "Nike Campaign Design",
  },
  {
    src: require("../assets/portfolio images/omega watch.jpg"),
    title: "Omega Watch Campaign",
  },
  {
    src: require("../assets/portfolio images/oneplus.jpg"),
    title: "OnePlus Brand Design",
  },
  {
    src: require("../assets/portfolio images/skyline.jpg"),
    title: "Urban Skyline Photography",
  },
  {
    src: require("../assets/portfolio images/speaker.jpg"),
    title: "Audio Equipment Design",
  },
  {
    src: require("../assets/portfolio images/swiggy 1.png"),
    title: "Swiggy Food Delivery",
  },
  {
    src: require("../assets/portfolio images/swiggy 2.png"),
    title: "Swiggy App Design",
  },
  {
    src: require("../assets/portfolio images/swiggy 3.png"),
    title: "Swiggy Brand Identity",
  },
  {
    src: require("../assets/portfolio images/swiggy 4.png"),
    title: "Swiggy Marketing",
  },
  {
    src: require("../assets/portfolio images/swiggy durga.jpg"),
    title: "Swiggy Festival Campaign",
  },
  {
    src: require("../assets/portfolio images/tacobell.jpg"),
    title: "TacoBell Brand Design",
  },
];

const Portfolio = () => (
  <PortfolioSection id="portfolio">
    <Container>
      <SectionTitle>
        Creative <span className="highlight">Solutions</span>
      </SectionTitle>

      <SectionSubtitle>
        Our clients love how 8Bit Creatives simplifies their creative processes
        and streamlines operations
      </SectionSubtitle>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} colorType={service.colorType} index={index}>
            <ServiceIcon colorType={service.colorType}>
              {service.icon}
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <Header>
        <StatsTitle>
          Our <span className="highlight">Flex</span>
        </StatsTitle>
      </Header>
      <StatsSection>
        <StatsGrid>
          <StatItem>
            <StatNumber colorType="cyan">95%</StatNumber>
            <StatLabel>Improved decision-making</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber colorType="magenta">99%</StatNumber>
            <StatLabel>Client satisfaction</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber colorType="yellow">150+</StatNumber>
            <StatLabel>Projects completed</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <ImageGallerySection>
        <BrowserWindow>
          <BrowserHeader>
            <BrowserButtons>
              <BrowserButton color="#ff5f57" />
              <BrowserButton color="#ffbd2e" />
              <BrowserButton color="#28ca42" />
            </BrowserButtons>
            <BrowserTitle>8Bit Creatives - Portfolio</BrowserTitle>
          </BrowserHeader>

          <BrowserContent>
            <PinterestMatrix>
              {portfolioImages.slice(0, 3).map((image, index) => (
                <ImageCard key={index}>
                  <ImageWrapper>
                    <PortfolioImage
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                    />
                    <ImageOverlay>
                      <ImageTitle>{image.title}</ImageTitle>
                    </ImageOverlay>
                  </ImageWrapper>
                </ImageCard>
              ))}
            </PinterestMatrix>

            <ViewAllButton onClick={() => window.open("/portfolio", "_blank")}>
              View All
            </ViewAllButton>
          </BrowserContent>
        </BrowserWindow>
      </ImageGallerySection>
    </Container>
  </PortfolioSection>
);

export default Portfolio;
