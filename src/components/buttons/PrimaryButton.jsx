import React from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const StyledPrimaryButton = styled.button`
  background: ${colors.glass.buttonPrimary};
  color: white;
  border: 1px solid ${colors.glass.border};
  padding: ${(props) =>
    props.size === "large" ? "1rem 2rem" : "0.6rem 1.2rem"};
  border-radius: ${(props) => (props.size === "large" ? "12px" : "8px")};
  font-size: ${(props) => (props.size === "large" ? "1rem" : "0.9rem")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  backdrop-filter: ${colors.blur.medium};
  -webkit-backdrop-filter: ${colors.blur.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${colors.cyan} 0%,
      ${colors.magenta} 50%,
      ${colors.yellow} 100%
    );
    opacity: 0.4;
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 164, 228, 0.4);
    border-color: rgba(0, 164, 228, 0.5);
    background: ${colors.glass.buttonHover};

    &::before {
      opacity: 0.7;
      background: linear-gradient(
        45deg,
        ${colors.cyan} 0%,
        ${colors.magenta} 25%,
        ${colors.yellow} 50%,
        ${colors.magenta} 75%,
        ${colors.cyan} 100%
      );
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      box-shadow: none;

      &::before {
        opacity: 0.4;
      }
    }
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
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
