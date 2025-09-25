import React, { useState } from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import { PrimaryButton } from "./buttons";
import { saveContactMessage } from "../firebase/contactService";

const ContactSection = styled.div`
  background: transparent;
  color: ${colors.textPrimary};
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
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

const ContactForm = styled.form`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);

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

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${colors.magenta};
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled.div`
  background: rgba(0, 200, 0, 0.1);
  border: 1px solid rgba(0, 200, 0, 0.3);
  color: #00c800;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Inter", sans-serif;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
`;

const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  color: #ff4444;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Inter", sans-serif;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Save to Firebase
      await saveContactMessage(formData);

      // Show success message
      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>
          Get In <span className="highlight">Touch</span>
        </SectionTitle>

        <ContactForm onSubmit={handleSubmit}>
          {submitStatus === "success" && (
            <SuccessMessage>
              ✅ Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}

          {submitStatus === "error" && (
            <ErrorMessage>
              ❌ Failed to send message. Please try again or contact us
              directly.
            </ErrorMessage>
          )}

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
            <PrimaryButton type="submit" size="large" disabled={isLoading}>
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </PrimaryButton>
          </SubmitButtonWrapper>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default ContactUs;
