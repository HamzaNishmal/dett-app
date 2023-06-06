import React, { useEffect } from "react";
import roup from "../../images/Home/Group.png";
import styled from "styled-components";
import Store from "../../images/Home/Gift_Box.svg";
import prebooking from "../../images/Home/prebooking.svg";
import Booking from "../../images/Home/Booking.svg";
import surprise from "../../images/Home/surprise.svg";
import memmories from "../../images/Home/memmories.svg";
import gif from "../../images/Home/ribbon.a9893cac2076928ac6b5.gif";
import safe from "../../images/Home/safe.svg";
import careful from "../../images/Home/careful.svg";
import quality from "../../images/Home/quality.svg";
import surpris from "../../images/Home/giftboxes.svg";
import associate from "../../images/Home/associate.a91a414a555c8485d610e83c7d2a6654.svg";
import register from "../../images/Home/resellernew.f914e7bf527e1a5db48a.png";
import dettTest from "../../images/Home/DettTestimonialImg.png";
import star from "../../images/Home/xg7DDYSWujGlr.png";
import GetappImg from "../../images/Home/GetappImg.png";
import playStore from "../../images/Home/playstoreicon.svg";
import AppStore from "../../images/Home/appstoreicon.svg";
import detapp from "../../images/Home/GetAppbg.png";
import formimage from "../../images/Home/FormImage.png";
import border from "../../images/Home/R5NHwQLjMdo75.png";
import Dett from "../../images/Home/dett_logo.svg";
import facebook from "../../images/Home/Facebook.svg";
import twitter from "../../images/Home/Twitter.svg";
import linkedin from "../../images/Home/Linkedin.svg";
import instagram from "../../images/About/instagram-colored.cd7e6da4cb5024c34c352c4169334b31.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Header() {
  useEffect(() => {
    AOS.init();
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const handleClick = (event) => {
    event.preventDefault()
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <>
      <NavBar />
      <MainHeader>
        <Item>
          <Left data-aos="fade-up">
            <SmallHead>We Gift You Happiness !</SmallHead>
            <HeadingOne>
              Re-Define Your <Span>Gifting</Span> Experience
            </HeadingOne>
            <Paragraph>
              Gift is a reflection of both the giver and the receiver, as well
              as their unique relationship. It allows us to communicate our
              feelings of love, friendship, bonding and appreciation for them.
            </Paragraph>
            <AboutButton to={"/prebook"}>Pre-Book</AboutButton>
          </Left>
          <Right>
            <ImgDiv>
              <BigImg src={roup} alt="Group" />
            </ImgDiv>
          </Right>
        </Item>
      </MainHeader>

      <StoreSection>
        <GiftItem>
          <StoreLeft>
            <StoreImg src={Store} alt="Gift" />
          </StoreLeft>
          <StoreRight data-aos="fade-up">
            <StoreHead>Gift from the best gifting store</StoreHead>
            <StoreParagraph>
              Gift is a sincere & genuine form of love. We carefully shape your
              good intentions, pay attention to the details with integrity &
              consistency to win over the trust of our customers.
            </StoreParagraph>
          </StoreRight>
        </GiftItem>
      </StoreSection>

      <BookingSection>
        <BookingItem>
          <BookingLeft data-aos="fade-up">
            <BookingSmall>Share Your Memories !</BookingSmall>
            <BookingHead>Why Us ?</BookingHead>
            <BookingParagraph>
              Our team is passionate about opportunities to innovate,
              experiment, leverage our global talent & unmatched services to
              deliver great results. This didn't happen overnight, without total
              commitment to our mission.
            </BookingParagraph>
          </BookingLeft>
          <BookingRight>
            <BookingUl>
              <BookingLi>
                <BookImg src={prebooking} alt="image" />
                <BookH3>Pre-Booking</BookH3>
              </BookingLi>
              <BookingLi>
                <BookImg src={Booking} alt="image" />
                <BookH3>Instant-Booking</BookH3>
              </BookingLi>
              <BookingLi>
                <BookImg src={surprise} alt="image" />
                <BookH3>Surprise Your Friends</BookH3>
              </BookingLi>
              <BookingLi>
                <BookImg src={memmories} alt="image"/>
                <BookH3>Share Your Memories</BookH3>
              </BookingLi>
            </BookingUl>
          </BookingRight>
        </BookingItem>
      </BookingSection>

      <StudentSection>
        <StudentItem>
          <StudentTop>
            <StudentHead>Stand out from the Crowd</StudentHead>
            <StusentPeragraph data-aos="fade-up">
              We carefully choreograph, organize to the timely advancement to
              meet the greatest needs, wants and desires of gifting.
            </StusentPeragraph>
          </StudentTop>
          <StudentMiddill>
            <StudentUl>
              <StudentLi data-aos="fade-up">
                <StudentItems style={{ background: "rgb(255, 233, 247)" }}>
                  <StudentSmall>
                    <StudentImg src={safe} alt="Post" />
                    <StudentH3>Instant Booking</StudentH3>
                    <StudentSpan>
                      Get unique gifts to surprise and delight your family and
                      friends
                    </StudentSpan>
                  </StudentSmall>
                </StudentItems>
              </StudentLi>
              <StudentLi data-aos="fade-up">
                <StudentItems style={{ background: "rgb(218, 248, 255)" }}>
                  <StudentSmall>
                    <StudentImg src={careful} alt="Post" />
                    <StudentH3>Incorporated Association</StudentH3>
                    <StudentSpan>
                      Sell us your creative works, empower your creativity
                      potential
                    </StudentSpan>
                  </StudentSmall>
                </StudentItems>
              </StudentLi>
              <StudentLi data-aos="fade-up">
                <StudentItems style={{ background: "rgb(255, 229, 219)" }}>
                  <StudentSmall>
                    <StudentImg src={quality} alt="Post" />
                    <StudentH3>Cost-effective</StudentH3>
                    <StudentSpan>
                      Our products meet all of the desired specifications, needs
                      with friendliness
                    </StudentSpan>
                  </StudentSmall>
                </StudentItems>
              </StudentLi>
            </StudentUl>
          </StudentMiddill>
        </StudentItem>
      </StudentSection>

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

      <BrandSection>
        <BrandItem>
          <BrandTop>
            <BrandHead>Associated Brands</BrandHead>
            <BrandPeragraph>
              We exclusively collaborative with different brands to meet your
              expectations.
            </BrandPeragraph>
          </BrandTop>
          <BrandBottom>
            <BrandSmall>
              <BrandImg src={associate} alt="image" />
              <BrandGet>
                Get New Offer's Every Week with <Span>Dett Spark</Span>
              </BrandGet>
            </BrandSmall>
          </BrandBottom>
        </BrandItem>
      </BrandSection>

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
̥
      <TestSection>
        <TestItem>
          <TestHead data-aos="fade-up">Testimonials</TestHead>
          <TestHeading data-aos="fade-up">
            An honest endorsement of our products & services from our customers,
            which makes us more determined to provide fulfilling services as a
            team.
          </TestHeading>
        </TestItem>
        <TestItems data-aos="fade-left">
          <TestUl>
            <TestLi>
              <TestImg src={dettTest} alt="dett" />
            </TestLi>
            <TestLi>
              <TestSmall>
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestPeragraph>
                  "Dett has been my only choice for any birthdays,weddings or
                  anniversaries coming up"
                </TestPeragraph>
                <TestName>Dr. Deepika Nair</TestName>
                <TestSub>
                  Bachelor of Ayurvedic <br /> Medicince and Surgery{" "}
                </TestSub>
              </TestSmall>
            </TestLi>
            <TestLi>
              <TestImg src={dettTest} alt="dett" />
            </TestLi>
            <TestLi>
              <TestSmall>
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestStar src={star} alt="star" />
                <TestPeragraph>
                  "Dett has been my only choice for any birthdays,weddings or
                  anniversaries coming up"
                </TestPeragraph>
                <TestName>Nisantha Muliyil</TestName>
                <TestSub>
                  process Data Engineer, <br /> Shell
                </TestSub>
              </TestSmall>
            </TestLi>
          </TestUl>
        </TestItems>
      </TestSection>
      <AppSection>
        <AppUrl>
          <AppItem>
            <AppHead>Get App</AppHead>
            <AppPeragraph>
              Get our app "Dett" from Google Play Store. It's simple, faster and
              secure which eases the act of gifting your dear one with love.
            </AppPeragraph>
          </AppItem>
          <AppItems>
            <AppTop>
              <AppUl>
                <AppLi>
                  <AppMain data-aos="fade-up">
                    Let's Start Gifting & Share Memories.
                  </AppMain>
                  <AppList data-aos="fade-up">
                    A gift is a lifetime memory for your loved one's. Send love
                    online with the supportive team of the Dett to impress your
                    special people. We are truly committed to guide and help you
                    in this process of wrapping love.
                  </AppList>
                  <AppSmall data-aos="fade-up">-Gift to loved one</AppSmall>
                </AppLi>
                <AppLi>
                  <AppWrapping>
                    <AppImg src={GetappImg} alt="GetApp" />
                  </AppWrapping>
                </AppLi>
              </AppUl>
            </AppTop>
            <AppBottom>
              <AppInstall>
                <AppAtag
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=app.dett.prebooking"
                >
                  <PlayStore src={playStore} alt="PlayStore" />
                </AppAtag>
              </AppInstall>
              <AppInstall>
                <AppAtag
                  target="_blank"
                  href="https://apps.apple.com/in/app/dett-prebooking/id6443670312"
                >
                  <AppStor src={AppStore} alt="AppStore" />
                </AppAtag>
              </AppInstall>
            </AppBottom>
          </AppItems>
        </AppUrl>
      </AppSection>

      <LoginSection id={"formpage"}>
        <LoginItem>
          <LoginLeft>
            <LoginHead>Let's Share Memories</LoginHead>
            <LoginPeragraph>
              We appreciate your kind gesture, please provide us with the
              following details. We are here 24*7, waiting eagerly to help you.
            </LoginPeragraph>
            <LoginPage>
              <LoginName>Name</LoginName>
              <NameInput
                type="text"
                id=""
                name=""
                placeholder="Enter your name"
                title="Enter Your Name"
              />
              <br />
              <LoginName>E-Mail</LoginName>
              <EmailInput
                type="email"
                id=""
                name=""
                placeholder="Enter your Email ID"
              />
              <br />
              <LoginName>Message</LoginName>
              <MessageInput
                type="text"
                id=""
                name=""
                placeholder="Type a message..."
              />
              <br />
              <LoginAtag target="_blank" href=" ">
                <LoginButton title="Enter" onClick={handleClick}>Send</LoginButton>
              </LoginAtag>
            </LoginPage>
          </LoginLeft>
          <LoginRight>
            <LoginImg src={formimage} alt="image" /> 
          </LoginRight>
        </LoginItem>
      </LoginSection>

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
                <BottomSocial>
                  <SocialTag
                    target="_blank"
                    href="https://www.facebook.com/dettworld?mibextid=ZbWKwL"
                  >
                    <SocialImg src={facebook} alt="" />
                  </SocialTag>
                  <SocialTag
                    target="_blank"
                    href="https://twitter.com/dettworld?t=d47SSDlwb7dIHOAhqXx0Dg&s=09"
                  >
                    <SocialImg src={twitter} alt="" />
                  </SocialTag>
                  <SocialTag
                    target="_blank"
                    href="https://www.linkedin.com/company/dettworld/"
                  >
                    <SocialImg src={linkedin} alt="" />
                  </SocialTag>
                  <SocialTag
                    target="_blank"
                    href="https://www.instagram.com/dett_world/?igshid=ZDdkNTZiNTM%3D"
                  >
                    <SocialImg src={instagram} alt="" />
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

const MainHeader = styled.div`
  padding-top: 180px;
`;
const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
`;
const Left = styled.div`
  width: 50%;
`;
const SmallHead = styled.h4`
  color: rgb(40, 44, 63);
  font-size: 13px;
  margin-bottom: 10px;
`;
const HeadingOne = styled.h1`
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
const Paragraph = styled.p`
  color: rgb(119, 122, 134);
  width: 78%;
  margin-bottom: 45px;
  line-height: 20px;
  font-size: 15px;
`;
const AboutButton = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
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
  transition: all 0.4s ease 0s;
  letter-spacing: 0.5px;
`;
const Right = styled.div`
  position: relative;
`;

const BigImg = styled.img`
  display: block;
  width: 100%;
`;

const ImgDiv = styled.div`
  width: 650px;
  position: absolute;
  left: -180px;
`;

const StoreSection = styled.div`
  padding-top: 250px;
`;
const GiftItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  -webkit-box-pack: justify;
  background: rgb(252, 252, 252);
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 33px;
  padding: 15px 0px;
  border-radius: 26px;
  -webkit-box-align: center;
`;
const StoreLeft = styled.div`
  width: 50%;
`;
const StoreImg = styled.img`
  width: 100%;
  display: block;
`;
const StoreRight = styled.div`
  max-width: 50%;
`;
const StoreHead = styled.h2`
  color: rgb(40, 44, 63);
  font-size: 34px;
  margin-bottom: 15px;
  font-weight: bold;
  max-width: 70%;
`;
const StoreParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6em;
  width: 85%;
  color: gray;
`;

const BookingSection = styled.div`
  padding: 110px 0 180px 0;
  background-image: url(${gif});
  background-position: 0px 200px;
  background-size: cover;
`;
const BookingItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
`;
const BookingLeft = styled.div`
  width: 50%;
`;
const BookingSmall = styled.h3`
  color: rgb(255, 94, 72);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const BookingHead = styled.h2`
  color: rgb(40, 44, 63);
  font-size: 38px;
  margin-bottom: 15px;
  font-weight: bold;
`;
const BookingParagraph = styled.p`
  color: #333;
  font-size: 1.0625rem;
  width: 75%;
  overflow-x: hidden;
  position: relative;
`;
const BookingRight = styled.div`
  width: 40%;
`;
const BookingUl = styled.ul``;
const BookingLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 85%;
  padding: 25px 32px;
  background: rgb(255, 255, 255);
  position: relative;
  box-shadow: rgb(114 114 114 / 7%) 0px 4px 67px;
  border-radius: 15px;
  -webkit-box-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(-30px);
  }
`;
const BookImg = styled.img`
  width: 35px;
`;
const BookH3 = styled.h3`
  margin-left: 8px;
`;
const StudentSection = styled.div``;
const StudentItem = styled.div`
  width: 75%;
  margin: 0px auto;
  border-radius: 26px;
  box-shadow: rgb(0 0 0 / 7%) 0px 6px 61px;
  padding: 60px 30px 180px 30px;
`;
const StudentTop = styled.div``;
const StudentHead = styled.h1`
  color: rgb(40, 44, 63);
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;
const StusentPeragraph = styled.p`
  color: rgb(119, 122, 134);
  width: 86%;
  line-height: 20px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin: 0px auto;
`;
const StudentMiddill = styled.div`
  margin-top: 50px;
`;
const StudentUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const StudentLi = styled.li`
`;
const StudentItems = styled.div`
  position: relative;
  margin-right: 10px;
  width: 290px;
  height: 161px;
  border-radius: 20px;
`;
const StudentSmall = styled.div`
  width: 195px;
  height: 131px;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 7%) 0px 6.02735px 51.663px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 54px;
  left: 44px;
`;
const StudentImg = styled.img`
  width: 65px;
  position: absolute;
  bottom: 45px;
  right: 70px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #333;
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;
const StudentH3 = styled.h3`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  bottom: -40px;
`;
const StudentSpan = styled.p`
  position: absolute;
  bottom: -120px;
  color: rgb(119, 122, 134);
  font-size: 15px;
  margin: 0px auto;
  line-height: 20px;
`;
const SurpriseSection = styled.div`
  padding: 100px 0px 100px 0px;
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
const BrandSection = styled.div``;
const BrandItem = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const BrandTop = styled.div`
  text-align: center;
`;
const BrandHead = styled.h1`
  margin-bottom: 15px;
  font-size: 38px;
`;
const BrandPeragraph = styled.p`
  color: rgb(129, 132, 143);
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.5px;
  font-weight: bold;
  width: 88%;
  margin: 0px auto;
  padding: 10px 10px 30px 10px;
`;
const BrandBottom = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  border-radius: 15px;
  box-shadow: rgb(249 249 249) 0px 0px 20px 15px;
  padding: 100px;
  width: 90%;
`;
const BrandSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BrandImg = styled.img`
  width: 40%;
  transition: 1s ease;
  &:hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    transition: 1s ease;
    width: 50%;
  }
`;
const BrandGet = styled.h1`
  font-size: 38px;
  font-weight: bold;
  width: 40%;
  line-height: 50px;
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
const TestSection = styled.div``;
const TestItem = styled.div`
  text-align: center;
  width: 70%;
  margin: 0px auto 50px;
`;
const TestHead = styled.h1`
  margin-bottom: 15px;
  font-size: 35px;
  font-weight: bold;
`;
const TestHeading = styled.p`
  color: rgb(129, 132, 143);
  width: 60%;
  margin: 0px auto;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
`;
const TestItems = styled.div`
  box-shadow: rgb(249 249 249) 0px -12px 10px 0px;
  border-radius: 15px;
  height: 400px;
  width: 70%;
  margin: 0 auto;
`;
const TestUl = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 100px 0px;
`;
const TestLi = styled.li`
  display: flex;
  justify-content: end;
`;
const TestImg = styled.img`
  width: 180px;
`;
const TestSmall = styled.div``;
const TestStar = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const TestPeragraph = styled.p`
  margin-top: 20px;
  color: rgb(119, 122, 134);
  margin-bottom: 20px;
  font-size: 14px;
  width: 74%;
  letter-spacing: 0.1px;
  line-height: 22px;
`;
const TestName = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
`;
const TestSub = styled.h2`
  font-size: 14px;
  line-height: 20px;
`;
const AppSection = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const AppUrl = styled.div`
  /* background-image: url(${detapp});
  background-repeat: no-repeat;
  background-size: 200px; */
`;
const AppItem = styled.div`
  text-align: center;
  padding: 80px 30px;
`;
const AppHead = styled.h1`
  margin-bottom: 15px;
  font-size: 38px;
  font-weight: bold;
`;
const AppPeragraph = styled.p`
  color: rgb(129, 132, 143);
  width: 60%;
  margin: 0px auto;
  font-size: 15px;
  line-height: 22px;
  font-weight: bold;
`;
const AppItems = styled.div`
  border-radius: 15px;
  box-shadow: rgb(249 249 249) -5px -5px 15px 15px;
  padding: 60px 65px;
  width: 94%;
  margin: 0 auto;
`;
const AppTop = styled.div``;
const AppUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const AppLi = styled.li`
  width: 60%;
`;
const AppMain = styled.h1`
  width: 70%;
  font-weight: bold;
  line-height: 45px;
  font-size: 32px;
  margin-bottom: 20px;
`;
const AppList = styled.p`
  color: rgb(129, 132, 143);
  width: 55%;
  line-height: 25px;
  font-size: 16px;
`;
const AppSmall = styled.h4`
  color: orange;
`;
const AppWrapping = styled.div``;
const AppImg = styled.img`
  width: 100%;
  display: block;
`;
const AppBottom = styled.div`
  display: flex;
`;
const AppInstall = styled.div`
  width: 20%;
`;
const AppAtag = styled.a``;
const PlayStore = styled.img`
  width: 100%;
  height: 80%;
`;
const AppStor = styled.img`
  width: 100%;
  height: 80%;
`;
const LoginSection = styled.div`
  padding: 100px 30px;
`;
const LoginItem = styled.div`
  background-image: url(${border});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const LoginLeft = styled.div`
  width: 60%;
  padding: 50px 60px 50px 170px;
`;
const LoginHead = styled.h1`
  color: rgb(255, 255, 255);
  margin-bottom: 15px;
  font-size: 34px;
`;
const LoginPeragraph = styled.p`
  margin-bottom: 30px;
  color: rgb(238, 238, 238);
  line-height: 1.3em;
  font-size: 15px;
`;
const LoginPage = styled.form``;
const LoginName = styled.h1`
  font-size: 13px;
  margin-bottom: 7px;
  color: rgb(255, 255, 255);
`;
const NameInput = styled.input`
  height: 45px;
  width: 100%;
  padding-left: 10px;
  color: gray;
  background: rgb(63, 63, 63);
  border-radius: 8px;
  margin-bottom: 12px;
  margin-right: 1px;
  font-size: 14px;
`;
const EmailInput = styled.input`
  height: 45px;
  width: 100%;
  padding-left: 10px;
  color: gray;
  background: rgb(63, 63, 63);
  border-radius: 8px;
  margin-bottom: 12px;
  margin-right: 1px;
  font-size: 14px;
`;
const MessageInput = styled.input`
  height: 100px;
  width: 100%;
  background: rgb(63, 63, 63);
  border-radius: 8px;
  resize: none;
  margin-bottom: 30px;
  padding: 10px;
  color: gray;
  font-size: 14px;
`;
const LoginAtag = styled.a``;
const LoginButton = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.4s ease 0s;
  height: 45px;
  width: 130px;
  border-radius: 5px;
  background: linear-gradient(rgb(255, 125, 108) 0%, rgb(255, 87, 64) 100%);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease 0s !important;
`;
const LoginRight = styled.div`
  width: 38%;
`;
const LoginImg = styled.img`
  width: 100%;
  display: block;
  padding-right: 100px;
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
const SocialImg = styled.img`
  width: 100%;
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

export default Header;
