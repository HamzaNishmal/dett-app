import React, { useEffect } from 'react'
import styled from 'styled-components'
import Dett from "../../images/Home/dett_logo.svg"
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



function NavBar() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Headers data-aos="fade-up">
        <Items>
          <LeftHead>
            <List>
              <HeaderImg src={Dett} alt="Dett-Logo" />
            </List>
          </LeftHead>
          <RightHead>
            <List>
              <Header to={"/home"} className={({isActive}) => isActive? "active": "not-active"}>Home</Header>   {/* style={{color: "rgb(255, 94, 72)"}} */}
            </List>
            <List>
              <Header to={"/about"} className={({isActive}) => isActive? "active": "not-active"}>About Us</Header>
            </List>
          </RightHead>
        </Items>
      </Headers>
    </>
  )
}

const Headers = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
`
const Items = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0 auto;
`
const LeftHead = styled.ul`
  width: 85px;
`
const HeaderImg = styled.img`
   width: 100%;
   cursor: pointer;
`
const RightHead = styled.ul`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end; 
    justify-content: end;
    width: 100%;
    
`
const List = styled.li`
  font-size: 16px;
`
const Header = styled(NavLink)`
  font-weight: 500;
  margin-right: 30px;
  margin-top: 10px;
  font-weight: bold;
  &:hover{
    color: rgb(255, 94, 72);
    transition: 0.3s ease-in-out;
  }
`
export default NavBar;
