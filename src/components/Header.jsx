import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import {signInWithPopup} from 'firebase/auth'

const Header = () => {

    const handleAuth = () => {
      signInWithPopup(auth,provider)
        .then((result)=>console.log(result))
        .catch((error)=>alert(error.message))

    }
  return (
    <NavBar>
      <LogoArea>
        <Logo src="../images/logo.svg" />
      </LogoArea>
      <NavItems>
        <Link>
          <img src="../images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </Link>
        <Link>
          <img src="../images/search-icon.svg" alt="Home" />
          <span>SEARCH</span>
        </Link>
        <Link>
          <img src="../images/watchlist-icon.svg" alt="Home" />
          <span>WATCHLIST</span>
        </Link>
        <Link>
          <img src="../images/original-icon.svg" alt="Home" />
          <span>ORIGNALS</span>
        </Link>
        <Link>
          <img src="../images/movie-icon.svg" alt="Home" />
          <span>MOVIES</span>
        </Link>
        <Link>
          <img src="../images/series-icon.svg" alt="Home" />
          <span>SERIES</span>
        </Link>
      </NavItems>
      <LoginButton onClick={handleAuth}>Login</LoginButton>
    </NavBar>
  );
};

const NavBar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  height: 60px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  background-color: #040714;
  width: 100%;
  padding: 2rem;
`;

const LogoArea = styled(Link)`
  display: inline-block;
  width: 100px;
  max-height: 80px;
`;

const Logo = styled.img`
  display: block;
  width: 100%;
  max-width: 150px;
  height: 60px;
  max-height: 100px;
  margin: 0;
`;

const NavItems = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  flex-flow: row nowrap;
  margin-right: auto;
  margin-left: 16px;
  gap: 1rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100%;
    padding: 0 12px;
    gap: 0.2rem;

    img {
      height: 30px;
      width: 40px;
      max-width: 40px;
      z-index: auto;
    }

    span {
      position: relative;
      letter-spacing: 3px;
      line-height: 1.4;
      white-space: nowrap;
      font-size: 15px;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        transform-origin: center;
        position: absolute;
        bottom: -6px;
        right: 0;
        left: 0;
        height: 2px;
        width: auto;
      }
    }
    &:hover {
      span:before {
        visibility: visible;
        transform: scaleX(1);
        opacity: 1 !important;
      }
    }
  }
`;

const LoginButton = styled(Link)`
  border: 2px solid #fff;
  box-shadow: 0px 4px 8px rgb(249,249,249 / 16%);
  background-color: #0d0d2b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all .2s ease-in-out;
  padding: 8px 16px;

  &:hover{
    background-color: #f9f9f9;
    color: #212121;
  }
`;

export default Header;
