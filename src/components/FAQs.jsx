import React, { useState } from "react";
import styled from "styled-components";
import colors from "../theme/colors";

const FAQSection = styled.div`
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
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.07s ease;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
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
            <FAQItem key={index}>
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
