import React from "react";
import styled from "styled-components";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";

const ContactAndFAQsContainer = styled.section`
  background: transparent;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ContactAndFAQs = () => {
  return (
    <ContactAndFAQsContainer>
      <ContentWrapper>
        <ContactUs />
        <FAQs />
      </ContentWrapper>
    </ContactAndFAQsContainer>
  );
};

export default ContactAndFAQs;
