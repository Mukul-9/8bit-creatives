import React from "react";
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
  width: 40px;
  height: 40px;
  margin-right: 0.75rem;
  border-radius: 6px;
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
  color: ${colors.textSecondary};
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
    color: ${colors.textPrimary};
    background: ${colors.glass.buttonSecondary};
    backdrop-filter: ${colors.blur.small};
    -webkit-backdrop-filter: ${colors.blur.small};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 164, 228, 0.2);
  }

  &.active {
    color: ${colors.magenta};
  }
`;

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => (
  <Nav>
    <LogoContainer onClick={() => scrollToSection("hero")}>
      <LogoIcon src="/8BIT LOGO 3.1.jpg" alt="8Bit Creatives Logo" />
      <LogoText>8Bit Creatives</LogoText>
    </LogoContainer>

    <NavLinks>
      <NavLink onClick={() => scrollToSection("hero")} className="active">
        Home
      </NavLink>
      <NavLink onClick={() => scrollToSection("browser-window")}>Portfolio</NavLink>
      <NavLink onClick={() => scrollToSection("creative-solutions")}>Services</NavLink>
      <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
      <NavLink onClick={() => scrollToSection("faqs")}>FAQ</NavLink>
    </NavLinks>

    <PrimaryButton onClick={() => scrollToSection("contact")} size="medium">
      Get Started
    </PrimaryButton>
  </Nav>
);

export default Navbar;
