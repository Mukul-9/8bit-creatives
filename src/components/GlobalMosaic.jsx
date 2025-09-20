import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// All portfolio images for global mosaic
const allPortfolioImages = [
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

// Infinite scroll animation
const infiniteScroll = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const GlobalMosaicContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vh; /* Double height for seamless looping */
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: #000000;
`;

const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 10px;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  animation: ${infiniteScroll} 60s linear infinite;
`;

const MosaicImageCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0.08;

  /* Random heights for Pinterest effect */
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
  &:nth-child(24) {
    grid-row-end: span 30;
  }
  &:nth-child(25) {
    grid-row-end: span 20;
  }
  &:nth-child(26) {
    grid-row-end: span 35;
  }
  &:nth-child(27) {
    grid-row-end: span 28;
  }
  &:nth-child(28) {
    grid-row-end: span 22;
  }
  &:nth-child(29) {
    grid-row-end: span 32;
  }
  &:nth-child(30) {
    grid-row-end: span 26;
  }
  &:nth-child(31) {
    grid-row-end: span 24;
  }
  &:nth-child(32) {
    grid-row-end: span 29;
  }
  &:nth-child(33) {
    grid-row-end: span 27;
  }
  &:nth-child(34) {
    grid-row-end: span 31;
  }
  &:nth-child(35) {
    grid-row-end: span 23;
  }
  &:nth-child(36) {
    grid-row-end: span 33;
  }
  &:nth-child(37) {
    grid-row-end: span 25;
  }
  &:nth-child(38) {
    grid-row-end: span 28;
  }
  &:nth-child(39) {
    grid-row-end: span 30;
  }
  &:nth-child(40) {
    grid-row-end: span 26;
  }
  &:nth-child(41) {
    grid-row-end: span 24;
  }
  &:nth-child(42) {
    grid-row-end: span 32;
  }
  &:nth-child(43) {
    grid-row-end: span 27;
  }
  &:nth-child(44) {
    grid-row-end: span 29;
  }
  &:nth-child(45) {
    grid-row-end: span 25;
  }
  &:nth-child(46) {
    grid-row-end: span 30;
  }
  &:nth-child(47) {
    grid-row-end: span 20;
  }
  &:nth-child(48) {
    grid-row-end: span 35;
  }
  &:nth-child(49) {
    grid-row-end: span 28;
  }
  &:nth-child(50) {
    grid-row-end: span 22;
  }
`;

const MosaicImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 12px;

  ${MosaicImageCard}:hover & {
    transform: scale(1.05);
  }
`;

const GlobalMosaic = () => {
  const [mosaicImages, setMosaicImages] = useState([]);

  useEffect(() => {
    // Create multiple copies of images for seamless infinite scroll
    const createMosaicImages = () => {
      const images = [];
      // Create 3 sets of images for seamless looping
      for (let set = 0; set < 3; set++) {
        allPortfolioImages.forEach((image, index) => {
          images.push({
            ...image,
            id: `${set}-${index}`,
            height: Math.floor(Math.random() * 15) + 20, // Random height 20-35
          });
        });
      }
      return images;
    };

    setMosaicImages(createMosaicImages());
  }, []);

  return (
    <GlobalMosaicContainer>
      <MosaicGrid>
        {mosaicImages.map((image, index) => (
          <MosaicImageCard
            key={image.id}
            style={{ gridRowEnd: `span ${image.height}` }}
          >
            <MosaicImage src={image.src} alt={image.title} loading="lazy" />
          </MosaicImageCard>
        ))}
      </MosaicGrid>
    </GlobalMosaicContainer>
  );
};

export default GlobalMosaic;
