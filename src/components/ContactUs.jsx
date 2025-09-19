import React, { useState } from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import { PrimaryButton } from "./buttons";

const ContactSection = styled.section`
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
        circle at 20% 80%,
        rgba(236, 0, 140, 0.04) 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(236, 0, 140, 0.03) 0%,
        transparent 55%
      ),
      radial-gradient(
        circle at 60% 60%,
        rgba(236, 0, 140, 0.025) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 1;
    animation: contactGlow 9s ease-in-out infinite alternate;
  }

  @keyframes contactGlow {
    0% {
      opacity: 0.4;
      transform: scale(1);
    }
    100% {
      opacity: 0.7;
      transform: scale(1.01);
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
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
  margin-bottom: 3rem;
  line-height: 1.6;
  font-family: "Inter", sans-serif;
`;

const ContactForm = styled.form`
  background: ${colors.glass.card};
  border: 1px solid ${colors.glass.border};
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  backdrop-filter: ${colors.blur.large};
  -webkit-backdrop-filter: ${colors.blur.large};

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${colors.textPrimary};
  font-weight: 500;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  background: ${colors.glass.secondary};
  border: 1px solid ${colors.glass.borderLight};
  border-radius: 12px;
  color: ${colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};

  &:focus {
    outline: none;
    border-color: ${colors.glass.border};
    box-shadow: 0 0 0 3px ${colors.overlays.primary},
      0 4px 16px rgba(0, 164, 228, 0.2);
    background: ${colors.glass.light};
  }

  &::placeholder {
    color: ${colors.textMuted};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.9rem 1rem;
  background: ${colors.glass.secondary};
  border: 1px solid ${colors.glass.borderLight};
  border-radius: 12px;
  color: ${colors.textPrimary};
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};

  &:focus {
    outline: none;
    border-color: ${colors.glass.border};
    box-shadow: 0 0 0 3px ${colors.overlays.primary},
      0 4px 16px rgba(0, 164, 228, 0.2);
    background: ${colors.glass.light};
  }

  &::placeholder {
    color: ${colors.textMuted};
  }
`;

const SubmitButtonWrapper = styled.div`
  margin-top: 1rem;
`;
const ContactInfo = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: ${colors.glass.card};
  border: 1px solid ${colors.glass.borderLight};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: ${colors.blur.medium};
  -webkit-backdrop-filter: ${colors.blur.medium};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${colors.glass.border};
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
    background: ${colors.glass.buttonHover};
  }
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${colors.glass.primary};
  border: 1px solid ${colors.glass.border};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.gradients.glow};
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);

    &::before {
      opacity: 0.5;
    }
  }
`;

const InfoTitle = styled.h3`
  color: ${colors.textPrimary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
`;

const InfoText = styled.p`
  color: ${colors.textSecondary};
  line-height: 1.5;
  font-size: 0.95rem;
  font-family: "Inter", sans-serif;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>
          Get In <span className="highlight">Touch</span>
        </SectionTitle>

        <SectionSubtitle>
          Ready to start your next creative project? Let's discuss how we can
          help bring your vision to life.
        </SectionSubtitle>

        <ContactForm onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="company">Company</Label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
            />
          </FormGroup>

          <SubmitButtonWrapper>
            <PrimaryButton type="submit" size="large">
              Send Message
            </PrimaryButton>
          </SubmitButtonWrapper>
        </ContactForm>

        <ContactInfo>
          <InfoCard>
            <InfoIcon>🚀</InfoIcon>
            <InfoTitle>Quick Response</InfoTitle>
            <InfoText>
              We typically respond within 24 hours to discuss your project
              requirements and next steps.
            </InfoText>
          </InfoCard>

          <InfoCard>
            <InfoIcon>🌐</InfoIcon>
            <InfoTitle>Global Reach</InfoTitle>
            <InfoText>
              Working with clients worldwide, delivering exceptional creative
              solutions across all time zones.
            </InfoText>
          </InfoCard>

          <InfoCard>
            <InfoIcon>💡</InfoIcon>
            <InfoTitle>Expert Consultation</InfoTitle>
            <InfoText>
              Free initial consultation to understand your vision and provide
              strategic creative guidance.
            </InfoText>
          </InfoCard>

          <InfoCard>
            <InfoIcon>⚡</InfoIcon>
            <InfoTitle>Agile Process</InfoTitle>
            <InfoText>
              Flexible development approach with regular updates, ensuring your
              project stays on track and exceeds expectations.
            </InfoText>
          </InfoCard>
        </ContactInfo>
      </Container>
    </ContactSection>
  );
};

export default ContactUs;
