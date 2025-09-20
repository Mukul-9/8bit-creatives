import React from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const StyledPrimaryButton = styled.button`
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9) 0%,
    rgba(40, 40, 40, 0.8) 100%
  );
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${(props) =>
    props.size === "large" ? "1rem 2.5rem" : "0.8rem 1.5rem"};
  border-radius: 50px;
  font-size: ${(props) => (props.size === "large" ? "1rem" : "0.9rem")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Inter", sans-serif;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);

      &::before {
        opacity: 0.6;
      }
    }
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    padding: ${(props) =>
      props.size === "large" ? "0.8rem 2rem" : "0.7rem 1.2rem"};
  }
`;

const PrimaryButton = ({
  children,
  onClick,
  disabled = false,
  size = "medium",
  fullWidth = false,
  type = "button",
  ...props
}) => {
  return (
    <StyledPrimaryButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      type={type}
      {...props}
    >
      {children}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
