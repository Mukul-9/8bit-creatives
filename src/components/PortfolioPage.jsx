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
  background: #000000;
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
  aspect-ratio: 4/5; /* Consistent aspect ratio for all images */

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
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

const BackButton = styled.button`
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9) 0%,
    rgba(40, 40, 40, 0.8) 100%
  );
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  margin-bottom: 2rem;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(40, 40, 40, 0.95) 0%,
      rgba(50, 50, 50, 0.85) 100%
    );
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const ModalTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0 0;
  text-align: center;
  font-family: "Inter", sans-serif;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1%;
  right: -20%;
  right: 10;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const PortfolioPage = () => {
  const [visibleImages, setVisibleImages] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);

  // Shuffle images on component mount and when visibleImages changes
  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledImages(shuffleArray(portfolioImages));
  }, [visibleImages]);

  const loadMoreImages = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleImages((prev) => Math.min(prev + 8, shuffledImages.length));
      setIsLoading(false);
    }, 500);
  };

  // const handleBackClick = () => {
  //   window.history.back();
  // };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && selectedImage) {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <PortfolioPageContainer>
      <Header>
        <Title>
          Our <span className="highlight">Portfolio</span>
        </Title>
        <Subtitle>
          Explore our collection and see how we bring ideas to life
        </Subtitle>
      </Header>

      <PinterestGrid>
        {shuffledImages.slice(0, visibleImages).map((image, index) => (
          <ImageCard
            key={`${image.title}-${index}`}
            onClick={() => handleImageClick(image)}
          >
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

      {visibleImages < shuffledImages.length && (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <BackButton onClick={loadMoreImages} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load More"}
          </BackButton>
        </div>
      )}

      {/* Modal for full-size image */}
      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={selectedImage.src} alt={selectedImage.title} />
            <ModalTitle>{selectedImage.title}</ModalTitle>
          </ModalContent>
        </ModalOverlay>
      )}
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
