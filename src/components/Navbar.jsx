import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import { PrimaryButton } from "./buttons";

const Nav = styled.nav`
  background: ${colors.glass.cardDark};
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.glass.borderLight};
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};
  border-radius: 0;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  height: 50px;
  object-fit: cover;
`;

const LogoText = styled.span`
  color: ${colors.textPrimary};
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${(props) => (props.isActive ? colors.magenta : colors.textSecondary)};
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;

  &:hover {
    color: ${colors.magenta};
    transform: translateY(-1px);
  }

  &.active {
    color: ${colors.magenta};
    font-weight: 600;
  }
`;

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "creative-solutions",
        "browser-window",
        "contact",
        "faqs",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <Nav>
      <LogoContainer onClick={() => handleNavClick("hero")}>
        <LogoIcon src="/8BIT LOGO 3.1.png" alt="8Bit Creatives Logo" />
        <LogoText>8Bit Creatives</LogoText>
      </LogoContainer>

      <NavLinks>
        <NavLink
          onClick={() => handleNavClick("hero")}
          isActive={activeSection === "hero"}
          className={activeSection === "hero" ? "active" : ""}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("creative-solutions")}
          isActive={activeSection === "creative-solutions"}
          className={activeSection === "creative-solutions" ? "active" : ""}
        >
          Services
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("browser-window")}
          isActive={activeSection === "browser-window"}
          className={activeSection === "browser-window" ? "active" : ""}
        >
          Portfolio
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("contact")}
          isActive={activeSection === "contact"}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("faqs")}
          isActive={activeSection === "faqs"}
          className={activeSection === "faqs" ? "active" : ""}
        >
          FAQ
        </NavLink>
      </NavLinks>

      <PrimaryButton onClick={() => handleNavClick("contact")} size="medium">
        Get Started
      </PrimaryButton>
    </Nav>
  );
};

export default Navbar;
