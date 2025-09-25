import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
// import { PrimaryButton } from "./buttons";

const FooterSection = styled.footer`
  background: rgba(0, 0, 0, 0.9);
  color: ${colors.textPrimary};
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 1rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const MainFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CTAHeadline = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin: 0;
  font-family: "Inter", sans-serif;

  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${colors.magenta};
    border-radius: 50%;
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// const CTAButton = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const Button = styled.button`
//   background: rgba(40, 40, 40, 0.9);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 8px;
//   padding: 0.8rem 1.5rem;
//   color: white;
//   font-size: 0.9rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   font-family: "Inter", sans-serif;
//   backdrop-filter: blur(10px);
//   -webkit-backdrop-filter: blur(10px);

//   &:hover {
//     background: rgba(50, 50, 50, 0.9);
//     border-color: rgba(255, 255, 255, 0.3);
//     transform: translateY(-2px);
//   }
// `;

// const PlusIcon = styled.div`
//   width: 20px;
//   height: 20px;
//   background: ${colors.magenta};
//   border-radius: 4px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 0.8rem;
//   font-weight: bold;
// `;

const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin: 0 0 0.8rem 0;
  font-family: "Inter", sans-serif;
`;

// const SectionContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const Address = styled.p`
//   color: white;
//   font-size: 0.9rem;
//   line-height: 1.4;
//   margin: 0;
//   font-family: "Inter", sans-serif;
// `;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  font-family: "Inter", sans-serif;

  &:hover {
    color: ${colors.magenta};
  }
`;

const Dot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  background: ${colors.magenta};
  border-radius: 50%;
  margin: 0 0.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.p`
  color: white;
  font-size: 0.9rem;
  margin: 0;
  font-family: "Inter", sans-serif;
`;

const HelpfulLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

const HelpfulLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  font-family: "Inter", sans-serif;

  &:hover {
    color: ${colors.magenta};
  }
`;

const BottomFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: white;
  font-size: 0.8rem;
  margin: 0;
  font-family: "Inter", sans-serif;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <MainFooter>
          <LeftColumn>
            <CTAHeadline>
              Have a Cool Idea?
              <br />
              Let's Collaborate<span className="dot"></span>
            </CTAHeadline>
          </LeftColumn>

          <MiddleColumn>
            <div>
              <SectionTitle>Social</SectionTitle>
              <SocialLinks>
                <SocialLink href="https://www.instagram.com/_8bitcreatives/">
                  Instagram
                </SocialLink>
                <Dot />
                <SocialLink href="https://x.com/8bitcreatives">
                  Twitter/X
                </SocialLink>
                {/* <SocialLink href="#">YouTube</SocialLink>
                <Dot />
                <SocialLink href="#">Pinterest</SocialLink> */}
              </SocialLinks>
            </div>
          </MiddleColumn>

          <RightColumn>
            <div>
              <SectionTitle>Contact</SectionTitle>
              <ContactInfo>
                <ContactItem>designers@8bitcreatives.design</ContactItem>
              </ContactInfo>
            </div>
            <div>
              <SectionTitle>Helpful Links</SectionTitle>
              <HelpfulLinks>
                <HelpfulLink href="#">Privacy Policy</HelpfulLink>
                <Dot />
                <HelpfulLink href="#">Terms</HelpfulLink>
                <Dot />
                <HelpfulLink href="#">Team</HelpfulLink>
                <Dot />
                <HelpfulLink href="#">Blog</HelpfulLink>
              </HelpfulLinks>
            </div>
          </RightColumn>
        </MainFooter>

        <BottomFooter>
          <Copyright>© 8Bit Creatives 2025</Copyright>
          {/* <Attribution>
            <span className="heart">♥</span>
            Made with Love on React
          </Attribution> */}
          {/* <Creator>
            Created by
            <ProfilePic>M</ProfilePic>
            <Signature>Mukul</Signature>
          </Creator> */}
        </BottomFooter>
      </Container>
    </FooterSection>
  );
};

export default Footer;
