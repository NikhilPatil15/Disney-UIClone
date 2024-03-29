import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <LogoOne src="../images/cta-logo-one.svg" alt="First-Logo" />
          <Button to='/'>Get it all here</Button>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <LogoTwo src='../images/cta-logo-two.png'/>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  margin-bottom: 10vw;
  height: 100%;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: url("../images/login-background.jpg");
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  gap: 1rem;
`;

const LogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 800px;
  min-height: 1px;
  margin-bottom: 12px;
`;

const Button = styled(Link)`
  background-color: #0063e5;
  text-align: center;
  width: 100%;
  font-size: 20px;
  color: white;
  position: relative;
  letter-spacing: 1.5px;
  border-radius: 0.25rem;
  font-weight: bold;
  margin-bottom: 12px;
  padding: 10px;
  &:hover {
    filter: brightness(0.9);
  }
`;

const Description = styled.p`
font-size: 18px;
letter-spacing: 1.5px;
text-align: center;
`

const LogoTwo = styled.img`
  max-width: 800px;
  width: 100%;
  min-height: 1px;
  margin-bottom: 12px;
`
export default Login;
