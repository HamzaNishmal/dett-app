import React from "react";
import PreBook from "../../images/PreBook/1.png";
import styled from "styled-components";
import two from "../../images/PreBook/2.png";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <>
      <PreBooking>
        <PreBookItem>
          <PreBookList>
            <PreBookLeft>
              <PreBookHead>
                Distance never matter,Make them feel your presence.
              </PreBookHead>
              <PreBookPeragraph>
                Reserve your gifts for special events or occasions in advance
                with Pre-booking. Have a convenient and organized way to send
                gifts.
              </PreBookPeragraph>
              <PreBookSpan>Gift to loved one</PreBookSpan>
              <PreBookButton to={"/login"}>Start Gifting Nowgift</PreBookButton>
            </PreBookLeft>
            <PreBookRight>
              <PreBookImg src={PreBook} alt="" />
            </PreBookRight>
          </PreBookList>
        </PreBookItem>
      </PreBooking>
    </>
  );
}

const PreBooking = styled.div`
  background-image: url(${two});
  background-repeat: no-repeat;
  background-size: 8%;
  height: 30px;
  background-position: center center;
`;
const PreBookItem = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 75%;
  padding: 70px 0px;
`;
const PreBookList = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 40px 90px;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 61px;
  position: relative;
`;
const PreBookLeft = styled.div`
  width: 48%;
`;
const PreBookHead = styled.h1`
  font-size: 35px;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const PreBookPeragraph = styled.p`
  color: rgb(119, 122, 134);
  font-size: 16px;
  width: 85%;
  margin-bottom: 5px;
  line-height: 30px;
`;
const PreBookSpan = styled.h2`
  color: rgb(255, 94, 72);
  font-size: 16px;
  margin-bottom: 40px;
`;
const PreBookButton = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  height: 48px;
  width: 170px;
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
const PreBookRight = styled.div`
  width: 48%;
`;
const PreBookImg = styled.img`
  width: 100%;
  display: block;
`;

export default Booking;
