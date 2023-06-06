import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar/NavBar'
// import ribion from '../../images/Login/ribion-new.34c9dc88b657fdd41d57.png'
import LoginImg from '../../images/Login/LoginImg.26544a1074ac1680492a.png'
import India from '../../images/Login/India.png'
import Arrow from '../../images/Login/ArrowDown2.png'
import { Link } from 'react-router-dom'


function LoginPage() {
    return (
        <>
            <NavBar />
            <LoginPages>
                <LoginItem>

                    <LoginHead>
                        <Wrapping>
                            <LoginImage src={LoginImg} alt="" />
                        </Wrapping>
                        <LoginHeading>Wrap your love for your loved ones</LoginHeading>
                        <LoginPeragraph>Sending you a little box of sunshine/happiness.</LoginPeragraph>
                    </LoginHead>

                    <LoginMidle>
                        <LoginPh>Mobile Number</LoginPh>
                        <WrapperOne>
                            <ContainerImg src={India} alt="" />
                        </WrapperOne>
                        <WrapperTwo>
                            <ContainerImgg src={Arrow} alt="" /><Small>+91 <Shot>|</Shot></Small>
                        </WrapperTwo>
                        <LoginInput type="number" placeholder='8138853946' />
                    </LoginMidle>

                    <LoginBottom>
                        <LoginButton>Continue</LoginButton>
                        <LoginFooter>By continuing, I agree to the <LoginSpan target="_blank" to={"/termsandcondition"}>Terms of Use</LoginSpan> & <LoginSpann target="_blank" to={"/privacypolicy"}>Privacy Policy</LoginSpann></LoginFooter>
                    </LoginBottom>

                </LoginItem>
            </LoginPages>

        </>
    )
}

const LoginPages = styled.div`
    background: linear-gradient(rgb(255, 248, 243) 0%, rgb(255, 246, 239) 100%);
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    padding-top: 79px;
`
const LoginItem = styled.div`
    background: rgb(255, 255, 255);
    max-width: 500px;
    min-width: 320px;
    margin: 0px auto;
    border-radius: 12px;
    padding: 60px;
    overflow: hidden;
    height: 100%;
`
const LoginHead = styled.div`
`
const Wrapping = styled.div`
    width: 45%;
    margin: 0 auto;
`
const LoginImage = styled.img`
    width: 100%;
    display: block;
`
const LoginHeading = styled.h1`
    font-size: 18px;
    color: rgb(40, 44, 63);
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`
const LoginPeragraph = styled.p`
    color: rgb(119, 122, 134);
    font-size: 13px;
    margin-top: 5px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
`
const LoginMidle = styled.div`
    position: relative;
`
const LoginPh = styled.h3`
    font-size: 14px;
    margin-bottom: 10px;
    color: rgb(40, 44, 63);
    letter-spacing: .5px;
`
const WrapperOne = styled.div`
    width: 30px;
    height: 0px;
    position: absolute;
    top: 40px;
    left: 10px;
`
const ContainerImg = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`
const WrapperTwo = styled.div`
    width: 13px;
    position: absolute;
    top: 45px;
    left: 50px;
`
const ContainerImgg = styled.img`
    width: 100%;
    display: block;
`
const Small = styled.div`
    position: absolute;
    top: -5px;
    left: 20px;
`
const Shot = styled.span`
    position: absolute;
    top: -0px;
    left: 32px;
    font-size: 14px;
    color: gray;
    font-weight: bold;
`
const LoginInput = styled.input`
    border: 1px solid rgb(232, 232, 232);
    width: 100%;
    display: flex;
    font-size: 16px;
    -webkit-box-align: center;
    align-items: center;
    height: 43px;
    border-radius: 5px;
    margin-bottom: 30px;
    position: relative;
    padding: 22px;
    padding-left: 110px;
    &::-webkit-inner-spin-button {
        display: none;
    }
`
const LoginBottom = styled.div``
const LoginButton = styled.div`
     background: linear-gradient(rgb(255, 125, 108) 0%, rgb(255, 87, 64) 100%);
    height: 45px;
    color: rgb(255, 255, 255);
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`
const LoginFooter = styled.h2`
    color: rgb(119, 122, 134);
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
    text-align: center;
`
const LoginSpan = styled(Link)`
    color: rgb(255, 94, 72);
    font-size: 14px;
    font-weight: bold;
`
const LoginSpann = styled(Link)`
    color: rgb(255, 94, 72);
    font-size: 14px;
    font-weight: bold;
`




export default LoginPage
