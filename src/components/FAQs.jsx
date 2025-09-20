import React, { useState } from "react";
import styled from "styled-components";
import colors from "../theme/colors";

const FAQSection = styled.section`
  background: transparent;
  color: ${colors.textPrimary};
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

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

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.95) 0%,
    rgba(50, 50, 50, 0.9) 40%,
    rgba(60, 60, 60, 0.85) 70%,
    ${(props) => {
      if (props.index === 0) return "rgba(0, 255, 255, 0.6)"; // cyan for first
      if (props.index === 1) return "rgba(236, 0, 140, 0.6)"; // magenta for second
      if (props.index === 2) return "rgba(255, 242, 0, 0.6)"; // yellow for third
      return "rgba(0, 255, 255, 0.6)"; // default cyan
    }}
    100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.07s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 20px rgba(255, 255, 255, 0.05);

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
        if (props.index === 0) return "rgba(0, 255, 255, 0.3)";
        if (props.index === 1) return "rgba(236, 0, 140, 0.3)";
        if (props.index === 2) return "rgba(255, 242, 0, 0.3)";
        return "rgba(0, 255, 255, 0.3)";
      }}
      0%,
      ${(props) => {
        if (props.index === 0) return "rgba(0, 200, 255, 0.15)";
        if (props.index === 1) return "rgba(200, 0, 120, 0.15)";
        if (props.index === 2) return "rgba(255, 200, 0, 0.15)";
        return "rgba(0, 200, 255, 0.15)";
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
          if (props.index === 0) return "rgba(0, 255, 255, 0.5)";
          if (props.index === 1) return "rgba(236, 0, 140, 0.5)";
          if (props.index === 2) return "rgba(255, 242, 0, 0.5)";
          return "rgba(0, 255, 255, 0.5)";
        }}
        0%,
        ${(props) => {
          if (props.index === 0) return "rgba(0, 200, 255, 0.25)";
          if (props.index === 1) return "rgba(200, 0, 120, 0.25)";
          if (props.index === 2) return "rgba(255, 200, 0, 0.25)";
          return "rgba(0, 200, 255, 0.25)";
        }}
        30%,
        transparent 60%
      );
    }
  }
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: transparent;
  border: none;
  color: ${(props) => (props.isOpen ? colors.magenta : colors.textPrimary)};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.07s ease;
  font-family: "Inter", sans-serif;
  position: relative;
  z-index: 3;

  &:focus {
    outline: none;
  }
`;

const QuestionIcon = styled.span`
  font-size: 1.2rem;
  color: ${colors.primary};
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.07s ease;
  font-weight: 300;
  min-width: 20px;
  text-align: center;
`;

const Answer = styled.div`
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: all 0.07s ease;
  border-top: ${(props) =>
    props.isOpen ? `1px solid ${colors.glass.borderLight}` : "none"};
  background: ${(props) =>
    props.isOpen ? colors.glass.secondary : "transparent"};
  position: relative;
  z-index: 3;
`;

const AnswerContent = styled.div`
  padding: ${(props) => (props.isOpen ? "1.5rem" : "0 1.5rem")};
  color: ${colors.textSecondary};
  backdrop-filter: ${colors.blur.small};
  -webkit-backdrop-filter: ${colors.blur.small};
  line-height: 1.6;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
`;

const faqs = [
  {
    question: "What services does 8Bit Creatives offer?",
    answer:
      "We specialize in comprehensive digital design solutions including web development, UI/UX design, brand identity, digital marketing assets, and creative consulting. Our team combines technical expertise with artistic vision to deliver exceptional results.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. Simple branding projects typically take 2-3 weeks, while comprehensive web development projects can take 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Absolutely! We work with clients from around the globe. Our digital-first approach and modern communication tools allow us to collaborate effectively across different time zones and deliver exceptional results regardless of location.",
  },
  {
    question: "What's your design process like?",
    answer:
      "Our process starts with understanding your vision and goals, followed by research and strategy development. We then create concepts, iterate based on feedback, and deliver polished final assets. Throughout the process, we maintain transparent communication and involve you in key decisions.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer various support packages including maintenance, updates, and additional design work. We believe in long-term partnerships and are always available to help evolve and expand your digital presence as your business grows.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed, transparent quotes after our initial consultation. We work within budgets of all sizes and offer flexible payment plans to meet your needs.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faqs">
      <Container>
        <SectionTitle>
          Frequently Asked <span className="highlight">Questions</span>
        </SectionTitle>

        <SectionSubtitle>
          Find answers to common questions about our services and process.
        </SectionSubtitle>

        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index} index={index}>
              <Question
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <QuestionIcon isOpen={openIndex === index}>^</QuestionIcon>
              </Question>
              <Answer isOpen={openIndex === index}>
                <AnswerContent isOpen={openIndex === index}>
                  {faq.answer}
                </AnswerContent>
              </Answer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default FAQs;
