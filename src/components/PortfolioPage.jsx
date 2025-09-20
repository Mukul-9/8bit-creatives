import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../theme/colors";

// Portfolio images data
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

const PortfolioPageContainer = styled.div`
  min-height: 100vh;
  background: transparent;
  color: ${colors.textPrimary};
  padding: 2rem;
  font-family: "Inter", sans-serif;
  position: relative;
  z-index: 1;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${colors.textPrimary};

  .highlight {
    background: ${colors.gradients.textHighlight};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const PinterestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 10px;
  gap: 1.5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.8rem;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* Pinterest-style random heights */
  &:nth-child(1) {
    grid-row-end: span 25;
  }
  &:nth-child(2) {
    grid-row-end: span 30;
  }
  &:nth-child(3) {
    grid-row-end: span 20;
  }
  &:nth-child(4) {
    grid-row-end: span 35;
  }
  &:nth-child(5) {
    grid-row-end: span 28;
  }
  &:nth-child(6) {
    grid-row-end: span 22;
  }
  &:nth-child(7) {
    grid-row-end: span 32;
  }
  &:nth-child(8) {
    grid-row-end: span 26;
  }
  &:nth-child(9) {
    grid-row-end: span 24;
  }
  &:nth-child(10) {
    grid-row-end: span 29;
  }
  &:nth-child(11) {
    grid-row-end: span 27;
  }
  &:nth-child(12) {
    grid-row-end: span 31;
  }
  &:nth-child(13) {
    grid-row-end: span 23;
  }
  &:nth-child(14) {
    grid-row-end: span 33;
  }
  &:nth-child(15) {
    grid-row-end: span 25;
  }
  &:nth-child(16) {
    grid-row-end: span 28;
  }
  &:nth-child(17) {
    grid-row-end: span 30;
  }
  &:nth-child(18) {
    grid-row-end: span 26;
  }
  &:nth-child(19) {
    grid-row-end: span 24;
  }
  &:nth-child(20) {
    grid-row-end: span 32;
  }
  &:nth-child(21) {
    grid-row-end: span 27;
  }
  &:nth-child(22) {
    grid-row-end: span 29;
  }
  &:nth-child(23) {
    grid-row-end: span 25;
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
  transition: transform 0.3s ease;
  border-radius: 16px;

  ${ImageCard}:hover & {
    transform: scale(1.1);
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

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${colors.textSecondary};
  font-size: 1.1rem;
`;

const BackButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9) 0%,
    rgba(40, 40, 40, 0.8) 100%
  );
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Inter", sans-serif;
  z-index: 1000;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

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
    transform: translateY(-2px);
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
    transform: translateY(0);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const PortfolioPage = () => {
  const [displayedImages, setDisplayedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 5;

  // Load initial images
  useEffect(() => {
    loadImages(1);
  }, []);

  // Load more images when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        if (!isLoading && displayedImages.length < portfolioImages.length) {
          loadMoreImages();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, displayedImages.length]);

  const loadImages = (page) => {
    setIsLoading(true);
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const newImages = portfolioImages.slice(startIndex, endIndex);

    setTimeout(() => {
      setDisplayedImages((prev) => [...prev, ...newImages]);
      setCurrentPage(page);
      setIsLoading(false);
    }, 500); // Simulate loading delay
  };

  const loadMoreImages = () => {
    if (displayedImages.length < portfolioImages.length) {
      loadImages(currentPage + 1);
    }
  };

  const goBack = () => {
    window.close();
  };

  return (
    <PortfolioPageContainer>
      <BackButton onClick={goBack}>← Back to Home</BackButton>

      <Header>
        <Title>
          Our <span className="highlight">Creative Portfolio</span>
        </Title>
        <Subtitle>
          Explore our complete collection of creative work and design projects
        </Subtitle>
      </Header>

      <PinterestGrid>
        {displayedImages.map((image, index) => (
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
      </PinterestGrid>

      {isLoading && (
        <LoadingSpinner>Loading more amazing work...</LoadingSpinner>
      )}
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
