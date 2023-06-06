import React, { useEffect } from "react";
import styled from "styled-components";
import OutLine from "../../images/About/new-outline.png";
import SliderOne from "../../images/About/slider-one.png";
import frame from "../../images/About/Frame%20.svg";
import pink from "../../images/About/pink.svg";
import second from "../../images/About/second-icon.87d1a6a03327dbe49df10147eb776ce3.svg";
import thrid from "../../images/About/thrid-icon.svg";
import fourth from "../../images/About/fourth-icon.svg";
import fifth from "../../images/About/fifth-icon.svg";
import sixth from "../../images/About/sixth-icon.svg";
import safe from "../../images/About/safe-handling.svg";
import careful from "../../images/About/careful-new.4b8e8601952e5549fc73501b128ce2d7.svg";
import quality from "../../images/About/quality-assurance.svg";
import gift from "../../images/About/0HF93hqUDRt0E.png";
import feature from "../../images/About/featureanimation.svg";
import featureTwo from "../../images/About/featureanimation-two.svg";
import featureThree from "../../images/About/featureanimation-three.svg";
import arcimages from "../../images/About/arcimage.png";
import surpris from "../../images/Home/giftboxes.svg";
import Ajeesh from "../../images/About/Ajeesh.png";
import jishnu from "../../images/About/jishnu.png";
import instagram from "../../images/About/instagram-colored.cd7e6da4cb5024c34c352c4169334b31.svg";
import post from "../../images/About/post.svg";
import india from "../../images/About/327548671_694281615552755_3161242953769516544_n.jpg";
import feb14 from "../../images/About/327471928_882617496402783_5176480860084030014_n.jpg";
import republic from "../../images/About/327301611_868029954500085_6240967750928290972_n.jpg";
import reel from "../../images/About/reel.svg";
import register from "../../images/Home/resellernew.f914e7bf527e1a5db48a.png";
import Dett from "../../images/Home/dett_logo.svg";
import facebook from "../../images/Home/Facebook.svg";
import twitter from "../../images/Home/Twitter.svg";
import linkedin from "../../images/Home/Linkedin.svg";
import insta from "../../images/About/instagram-colored.cd7e6da4cb5024c34c352c4169334b31.svg";
import youtube from "../../images/About/Youtube.svg.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

// first this npm install (npm install --save aos@next)

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <AboutSection>
        <AboutItem>
          <AboutLeft>
            <AboutSmall data-aos="fade-up">We Gift You Happiness !</AboutSmall>
            <AboutBig data-aos="fade-up">
              Re-Define Your <Span>Gifting</Span> Experience
            </AboutBig>
            <AboutParagraph data-aos="fade-up">
              Gift is a reflection of both the giver and the receiver, as well
              as their unique relationship. It allows us to communicate our
              feelings of love, friendship, bonding and appreciation for them.
            </AboutParagraph>
            <Atage to={"/home/#formpage"}>
              <AboutButton>Contact Us</AboutButton>
            </Atage>
          </AboutLeft>
          <AboutRight>
            <AboutBg>
              <Imgoutline src={OutLine} alt="" />
            </AboutBg>
            <AboutSlid>
              <ImgSlider src={SliderOne} alt="" />
            </AboutSlid>
          </AboutRight>
        </AboutItem>
      </AboutSection>

      <CompanySection>
        <CompanyItem>
          <CompanyTop>
            <CompanyHead>
              You Are in a Good Company <FrameImg src={frame} alt="" />
            </CompanyHead>
            <CompanyParagrph>
              We help in strengthening relationships to stay in touch and keep
              that person in your life by sending something special as memories/
              gifts.
            </CompanyParagrph>
          </CompanyTop>
          <CompanyBottom>
            <CompanyItems>
              <CompanyMemories data-aos="fade-up">
                <CompanyWrapping>
                  <ImgMemories src={safe} alt="" />
                </CompanyWrapping>
                <MemoriesHead>
                  <Dott src={pink} alt="" />
                  Safe Handling
                </MemoriesHead>
                <MemoriesPeragraph>
                  We are obliged to send memorable gifts to your loved ones
                  safely.
                </MemoriesPeragraph>
              </CompanyMemories>
              <CompanyMemories data-aos="fade-up">
                <CompanyWrapping>
                  <ImgMemories src={careful} alt="" />
                </CompanyWrapping>
                <MemoriesHead>
                  <Dott src={second} alt="" />
                  Careful Packaging
                </MemoriesHead>
                <MemoriesPeragraph>
                  We ensure we give the same importance from fragile to high
                  value products.
                </MemoriesPeragraph>
              </CompanyMemories>
              <CompanyMemories data-aos="fade-up">
                <CompanyWrapping>
                  <ImgMemories src={quality} alt="" />
                </CompanyWrapping>
                <MemoriesHead>
                  <Dott src={thrid} alt="" />
                  Quality Assurance
                </MemoriesHead>
                <MemoriesPeragraph>
                  Utmost attention to quality & every stage of the process of
                  delivery.
                </MemoriesPeragraph>
              </CompanyMemories>
            </CompanyItems>
            <CompanyItems>
              <CompanyMemories data-aos="fade-up">
                <CompanyWrapping>
                  <ImgMemories src={careful} alt="" />
                </CompanyWrapping>
                <MemoriesHead>
                  <Dott src={fourth} alt="" />
                  Quick Delivery
                </MemoriesHead>
                <MemoriesPeragraph>
                  We care for your valuable time and on time delivery of gifts
                  on special occasions.
                </MemoriesPeragraph>
              </CompanyMemories>
              <CompanyMemories data-aos="fade-up">
                <CompanyWrapping>
                  <ImgMemories src={gift} alt="" />
                </CompanyWrapping>
                <MemoriesHead>
                  <Dott src={fifth} alt="" />
                  Gesture of Reminding
                </MemoriesHead>
                <MemoriesPeragraph>
                  We are obliged to remind you, your dear one's special
                  occasions. We serve your expectations happily.
                </MemoriesPeragraph>
              </CompanyMemories>
              <CompanyMemories data-aos="fade-up">
                <CompanyWrapping>
                  <ImgMemories src={safe} alt="" />
                </CompanyWrapping>
                <MemoriesHead>
                  <Dott src={sixth} alt="" />
                  Customized Solutio
                </MemoriesHead>
                <MemoriesPeragraph>
                  To transform your thought process into customized special
                  gifts is our primary responsibility.
                </MemoriesPeragraph>
              </CompanyMemories>
            </CompanyItems>
          </CompanyBottom>
        </CompanyItem>
      </CompanySection>

      <FeaturesSection>
        <FeaturesItem>
          <FeaturesTop>
            <FeaturesHeading data-aos="fade-up">Our Features</FeaturesHeading>
            <FeaturesPheragraph data-aos="fade-up">
              We focus on creating a touchpoint, emotional connection with
              employees, clients, or prospects through the use of gifts to
              strengthen your bonding with your loved ones
            </FeaturesPheragraph>
          </FeaturesTop>
          <FeaturesBottom>
            <FeaturesItems data-aos="fade-up">
              <ImageWrapper>
                <FeaturesImg src={feature} alt="" />
              </ImageWrapper>
              <FeaturesList>
                <FeaturesHead>Instant gifting</FeaturesHead>
                <FeaturesLine>
                  nstant booking of top branded gifts at affordable prices with
                  expert guidance is a unique feature of ours.{" "}
                </FeaturesLine>
              </FeaturesList>
            </FeaturesItems>

            <FeaturesItems data-aos="fade-up">
              <FeaturesList>
                <FeaturesHead>Pre-booking</FeaturesHead>
                <FeaturesLine>
                  You can pre-book the special occasions of your loved one's
                  before 365 days advancely to surprise them with lovely gifts
                  from the Dett.
                </FeaturesLine>
              </FeaturesList>
               <ImageWrapper>
                <FeaturesImg src={featureTwo} alt="" />
              </ImageWrapper>
            </FeaturesItems>

            <FeaturesItems data-aos="fade-up">
              <ImageWrapper>
                <FeaturesImg src={featureThree} alt="" />
              </ImageWrapper>
              <FeaturesList>
                <FeaturesHead>Reliability</FeaturesHead>
                <FeaturesLine>
                  Most trusted gifting platform. Client's information is
                  confidential. Emphasize unique values, strong vision &
                  customer-centric approach.
                </FeaturesLine>
              </FeaturesList>
            </FeaturesItems>
          </FeaturesBottom>
        </FeaturesItem>
      </FeaturesSection>

      <SurpriseSection>
        <SurpriseItem>
          <SurpriseRight>
            <SurpriseImg src={surpris} alt="image" />
          </SurpriseRight>
          <SurpriseLeft>
            <SurpriseHead>Surprise your friend's right now !!</SurpriseHead>
            <SurprisePeragraph>
              Your gift boutique for tailor made, pre curated and exquisite
              gifts & hampers for your loved ones. Made with love, sealed with a
              bow! Keep loving, Keep gifting!
            </SurprisePeragraph>
          </SurpriseLeft>
        </SurpriseItem>
      </SurpriseSection>

      <TeamContainer>
        <TeamTop>
          <TeamHeader data-aos="fade-up">Behind the Team</TeamHeader>
          <TeamPeragraph data-aos="fade-up">
            We are constantly evolving & improving to be one of the top gifting
            service providers. Our mission is to achieve more by working hard
            with focus & dedication.
          </TeamPeragraph>
        </TeamTop>
        <TeamBottom>
          <TeamCard data-aos="fade-up">
            <TeamImg src={Ajeesh} alt="" />
            <TeamIntro>
              <TeamHead>Ajeesh S</TeamHead>
              <TeamSmall>Co-Founder & CEO</TeamSmall>
            </TeamIntro>
          </TeamCard>

          <TeamCard data-aos="fade-up">
            <TeamImg src={jishnu} alt="" />
            <TeamIntro>
              <TeamHead>Jishnu Prakash</TeamHead>
              <TeamSmall>Co-Founder</TeamSmall>
            </TeamIntro>
          </TeamCard>

          
        </TeamBottom>
      </TeamContainer>

      <InstaContainer>
        <InstaItem>
          <InstaTop>
            <InstaWrapper data-aos="fade-up">
              <InstaImg src={instagram} alt="" />
              <InstaHead>
                Follow us on <InstaSpan>Instagram</InstaSpan>
              </InstaHead>
            </InstaWrapper>
            <InstaPeragraph data-aos="fade-up">
              One-Stop online shop for all your gifting needs. Follow us to know
              more & stay connected. Get perfect gifting ideas for your friends
              & family.
            </InstaPeragraph>
          </InstaTop>

          <InstaBottom>
            <InstaList data-aos="fade-up">
              <InstaLine>
                <SocialImg src={post} alt="" />
                <SocialHead>Post</SocialHead>
              </InstaLine>
              <InstaLine>
                <SocialImg src={reel} alt="" />
                <SocialHead>Reel</SocialHead>
              </InstaLine>
            </InstaList>
            <Items data-aos="fade-up">
              <InstaPosters>
                <PostertsImg src={india} alt="" />
                <PostertsImg src={feb14} alt="" />
                <PostertsImg src={republic} alt="" />
              </InstaPosters>
            </Items>
          </InstaBottom>
        </InstaItem>
      </InstaContainer>

      <RegisterSection>
        <RegisterItem>
          <RegisterItems>
            <RegisterHead>Re-Seller Registration</RegisterHead>
            <RegisterPeragraph>
              Sell your creative works, handmade items, crafts at the Dett
              platform by registering yourself as a Reseller. Take your Business
              online today.
            </RegisterPeragraph>
          </RegisterItems>
        </RegisterItem>
      </RegisterSection>

      <BottomSection>
        <BottomItem>
          <BottomLeft>
            <BottomSmall>
              <DettAtag target="_blank" href="">
                <BottomImg src={Dett} alt="" />
              </DettAtag>
            </BottomSmall>
          </BottomLeft>
          <BottomRight>
            <BottomUl>
              <BottomLi>
                <BottomH1>About</BottomH1>
              </BottomLi>
              <BottomLi>
                <BottomAtag target="_blank" href="">
                  <BottomH2>About Us</BottomH2>
                </BottomAtag>
              </BottomLi>
              <BottomLi>
                <BottomAtag target="_blank" href="">
                  <BottomH2>Contact Us</BottomH2>
                </BottomAtag>
              </BottomLi>
            </BottomUl>
            <BottomUl>
              <BottomLi>
                <BottomH1>Policy</BottomH1>
              </BottomLi>
              <BottomLi>
                <BottomAtag target="_blank" href="">
                  <BottomH2>Terms of Use</BottomH2>
                </BottomAtag>
              </BottomLi>
              <BottomLi>
                <BottomAtag target="_blank" href="">
                  <BottomH2>Privacy</BottomH2>
                </BottomAtag>
              </BottomLi>
            </BottomUl>
            <BottomUl>
              <BottomLi>
                <BottomH1>Head Office</BottomH1>
              </BottomLi>
              <BottomLi>
                <BottomAtag target="_blank" href="">
                  <BottomPeragraph>
                    Dett Private Limited, 3rd floor, 41/418Z, Cabin no 2, Oberon
                    Mall, NH Ln, Padivattom, Edappally, Ernakulam, Kerala
                    6820324
                  </BottomPeragraph>
                </BottomAtag>
              </BottomLi>
              <BottomLi>
                <BottomSocial data-aos="fade-up">
                  <SocialTag
                    target="_blank"
                    href="https://www.facebook.com/dettworld?mibextid=ZbWKwL"
                  >
                    <MediadImg src={facebook} alt="" />
                  </SocialTag>
                  <SocialTag
                    target="_blank"
                    href="https://twitter.com/dettworld?t=d47SSDlwb7dIHOAhqXx0Dg&s=09"
                  >
                    <MediadImg src={twitter} alt="" />
                  </SocialTag>
                  <SocialTag
                    target="_blank"
                    href="https://www.linkedin.com/company/dettworld/"
                  >
                    <MediadImg src={linkedin} alt="" />
                  </SocialTag>
                  <SocialTag
                    target="_blank"
                    href="https://www.instagram.com/dett_world/?igshid=ZDdkNTZiNTM%3D"
                  >
                    <MediadImg src={insta} alt="" />
                  </SocialTag>
                  <SocialTag
                    target="_blank"
                    href="https://www.youtube.com/@dettmedia"
                  >
                    <MediadImg src={youtube} alt="" />
                  </SocialTag>
                </BottomSocial>
              </BottomLi>
            </BottomUl>
          </BottomRight>
        </BottomItem>
        <PolicySection>
          <Policy>
            @2023 Dett Pvt Ltd, Inc
            <PolicySpan>
              <PolicyAtag target="_blank" href="">
                Terms of Services
              </PolicyAtag>
            </PolicySpan>
            |
            <PolicySpan>
              <PolicyAtag target="_blank" href="">
                Privacy Policy
              </PolicyAtag>
            </PolicySpan>
          </Policy>
        </PolicySection>
      </BottomSection>
    </>
  );
}

const AboutSection = styled.div`
  padding: 200px 0px;
`;
const AboutItem = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const AboutLeft = styled.div`
  width: 50%;
`;
const AboutSmall = styled.h4`
  color: rgb(40, 44, 63);
  font-size: 13px;
  margin-bottom: 10px;
`;
const AboutBig = styled.h1`
  width: 90%;
  color: rgb(40, 44, 63);
  font-size: 42px;
  margin-bottom: 20px;
  font-weight: bold;
`;
const Span = styled.span`
  font-size: 42px;
  color: rgb(255, 94, 72);
  font-weight: bold;
`;
const AboutParagraph = styled.p`
  color: rgb(119, 122, 134);
  width: 78%;
  margin-bottom: 45px;
  line-height: 20px;
  font-size: 15px;
`;
const Atage = styled(Link)`
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  height: 45px;
  width: 130px;
  border-radius: 5px;
  background: linear-gradient(rgb(255, 125, 108) 0%, rgb(255, 87, 64) 100%);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.3s ease;
`;
const AboutButton = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    transform: translateX(-10px);
  }
`;
const AboutRight = styled.div`
  width: 50%;
`;
const AboutBg = styled.div`
  width: 85%;
  position: relative;
`;
const Imgoutline = styled.img`
  width: 100%;
  display: block;
  position: absolute;
`;
const AboutSlid = styled.div`
  width: 83%;
  position: relative;
`;
const ImgSlider = styled.img`
  width: 100%;
  display: block;
  position: absolute;
`;
const CompanySection = styled.div`
  padding: 50px 0;
`;
const CompanyItem = styled.div`
  padding: 80px;
  width: 75%;
  margin: 0 auto;
  background: rgb(252, 252, 252);
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 61px;
  border-radius: 5px;
`;
const CompanyTop = styled.div`
  text-align: center;
`;
const CompanyHead = styled.h1`
  color: rgb(40, 44, 63);
  font-size: 38px;
  margin-right: 8px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const FrameImg = styled.img`
  width: 100%;
  display: block;
`;
const CompanyParagrph = styled.p`
  color: rgb(119, 122, 134);
  font-size: 15px;
  line-height: 20px;
  width: 55%;
  text-align: center;
  margin: 0px auto;
  font-weight: bold;
  margin-bottom: 30px;
`;
const CompanyBottom = styled.div``;
const CompanyItems = styled.div`
  display: flex;
`;
const CompanyMemories = styled.div`
  padding-top: 40px;
`;
const CompanyWrapping = styled.div`
  width: 50px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 3%) 0px 4.74492px 16.6072px;
  border-radius: 8px;
  margin-bottom: 20px;
  height: 50px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
`;
const ImgMemories = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  animation: zoomInOut 2s ease-in-out infinite;

  @keyframes zoomInOut {
    0% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const MemoriesHead = styled.h3`
  color: rgb(40, 44, 63);
  font-size: 16px;
  display: inline-block;
`;
const Dott = styled.img`
  margin-right: 5px;
`;
const MemoriesPeragraph = styled.p`
  color: rgb(119, 122, 134);
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
  width: 90%;
`;
const FeaturesSection = styled.div`
  padding: 100px 0;
`;
const FeaturesItem = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const FeaturesTop = styled.div`
  text-align: center;
`;
const FeaturesHeading = styled.h1`
  color: rgb(40, 44, 63);
  font-size: 38px;
  text-align: center;
  margin-bottom: 18px;
  font-weight: bold;
`;
const FeaturesPheragraph = styled.p`
  color: rgb(119, 122, 134);
  font-size: 15px;
  line-height: 20px;
  width: 50%;
  text-align: center;
  margin: 0px auto 50px;
  font-weight: bold;
`;
const FeaturesBottom = styled.div`
  background: url(${arcimages});
  background-repeat: no-repeat;
  background-size: 75%;
  height: 600px;
  background-position: center center;
`;
const FeaturesItems = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 55%;
  padding: 40px 45px;
  background: rgb(252, 252, 252);
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 61px;
  border-radius: 10px;
  margin: 0px auto 30px;
`;
const ImageWrapper = styled.div`
  width: 70px;
`;
const FeaturesImg = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
  &:hover {
    animation: zoomInOut 6s ease infinite;
  }

  @keyframes zoomInOut {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const FeaturesList = styled.div`
  width: 80%;
  margin-left: 20px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(20px);
  }
`;
const FeaturesHead = styled.h2`
  color: rgb(40, 44, 63);
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;
const FeaturesLine = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: rgb(119, 122, 134);
`;

const SurpriseSection = styled.div`
  padding: 10px 0;
`;
const SurpriseItem = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 60%) 0px 0px 1rem;
  background-color: rgba(255, 255, 255, 0.25);
  background-color: #1f1c1c;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SurpriseRight = styled.div`
  width: 55%;
`;
const SurpriseImg = styled.img`
  width: 100%;
  display: block;
`;
const SurpriseLeft = styled.div``;
const SurpriseHead = styled.h2`
  margin-bottom: 15px;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: bold;
`;
const SurprisePeragraph = styled.p`
  width: 73%;
  font-size: 15px;
  color: rgb(119, 122, 134);
  line-height: 21px;
  letter-spacing: 0.5px;
`;

const TeamContainer = styled.div`
  padding: 50px;
`;
const TeamTop = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const TeamHeader = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
const TeamPeragraph = styled.p`
  text-align: center;
  color: rgb(119, 122, 134);
`;
const TeamBottom = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TeamCard = styled.div`
  position: relative;
  height: 280px;
  width: 200px;
  margin: 50px;
  box-shadow: 5px 5px 20px black;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgb(241, 109, 124) -17.28%,
    rgb(115, 160, 254) 137.28%
  );
  border-radius: 6px;
  display: inline-block;
`;
const TeamImg = styled.img`
  height: 280px;
  width: 180px;
  border-radius: 3px;
`;
const TeamIntro = styled.div`
  padding: 6px;
`;
const TeamHead = styled.h1`
  font-size: 19px;
  /* position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover .name {
    opacity: 1;
  } */
`;
const TeamSmall = styled.h2``;

const InstaContainer = styled.div``;
const InstaItem = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const InstaTop = styled.div``;
const InstaWrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
`;
const InstaImg = styled.img`
  width: 50px;
  padding: 8px;
  background: rgb(252, 252, 252);
`;
const InstaHead = styled.h1`
  color: rgb(40, 44, 63);
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 35px;
`;
const InstaSpan = styled.span`
  background-image: linear-gradient(
    rgb(146, 13, 248) 0%,
    rgb(187, 24, 205) 28%,
    rgb(224, 31, 150) 52%,
    rgb(255, 41, 62) 71%,
    rgb(252, 113, 49) 85%,
    rgb(248, 157, 37) 94%,
    rgb(245, 188, 0) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: 100%;
  background-color: #f3ec78;
  font-weight: bold;
`;
const InstaPeragraph = styled.p`
  width: 65%;
  margin: 0 auto;
  text-align: center;
  font-size: 17px;
  color: gray;
  line-height: 23px;
`;

const InstaBottom = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const InstaList = styled.div`
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 61px;
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  margin: 20px 25px;
  padding: 10px;
  cursor: pointer;
`;
const InstaLine = styled.div`
  display: flex;
  align-items: center;
`;
const SocialImg = styled.img`
  width: 35%;
  display: block;
`;
const SocialHead = styled.h2`
  font-size: 16px;
  color: rgb(40, 44, 63);
  margin-left: 10px;
`;
const Items = styled.div``;
const InstaPosters = styled.div`
  width: 23%;
  display: flex;
`;
const PostertsImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

const RegisterSection = styled.div``;
const RegisterItem = styled.div`
  background-image: url(${register});
  background-repeat: no-repeat;
  background-size: 70%;
  height: 450px;
  background-position: center center;
`;
const RegisterItems = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 250px 0 0 90px;
`;
const RegisterHead = styled.h1`
  margin-bottom: 15px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: bold;
`;
const RegisterPeragraph = styled.p`
  font-size: 14px;
  width: 45%;
  margin-bottom: 15px;
  color: rgb(119, 122, 134);
  line-height: 23px;
  letter-spacing: 0.5px;
`;
const BottomSection = styled.div`
  padding: 40px 0px 50px;
  border-top: 1px solid rgb(243, 243, 243);
`;
const BottomItem = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid rgb(243, 243, 243);
  padding-bottom: 20px;
`;
const BottomLeft = styled.div`
  margin-right: 50px;
`;
const BottomUl = styled.ul`
  width: 100%;
`;
const BottomLi = styled.li``;
const BottomAtag = styled.a``;
const BottomSmall = styled.div`
  width: 80px;
`;
const DettAtag = styled.a``;
const BottomImg = styled.img`
  width: 100%;
  display: block;
`;
const BottomRight = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BottomH1 = styled.h1`
  font-size: 15px;
  margin-bottom: 20px;
`;
const BottomH2 = styled.h2`
  font-size: 15px;
  margin-bottom: 20px;
  color: black;
`;
const BottomPeragraph = styled.p`
  color: gray;
  font-size: 14px;
  line-height: 20px;
`;
const BottomSocial = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 58%;
  margin-top: 40px;
`;
const SocialTag = styled.a`
  margin-right: 10px;
`;
const MediadImg = styled.img`
  width: 100%;
  height: 28px;
  display: block;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;
const PolicySection = styled.div`
  padding-top: 20px;
  text-align: center;
`;
const Policy = styled.h1`
  font-size: 14px;
  color: rgb(160, 162, 170);
`;
const PolicySpan = styled.span`
  margin-right: 5px;
  margin-left: 5px;
  color: rgb(160, 162, 170);
`;
const PolicyAtag = styled.a`
  color: rgb(160, 162, 170);
  &:hover {
    color: red;
  }
`;

export default About;
