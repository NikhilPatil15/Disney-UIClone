import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignOut, setUserLogin } from "../redux/features/user";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);
  const photo = useSelector((state) => state.user.photo);

  const setUser = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const isMobileDevice = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  const handleAuth = () => {
    if (!userName) {
      if (isMobileDevice()) {
        signInWithRedirect(auth, provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => alert(error.message));
      } else {
        signInWithPopup(auth, provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => alert(error.message));
      }
    } else {
      signOut(auth)
        .then(() => {
          dispatch(setSignOut());
          navigate("/");
        })
        .catch((e) => {
          alert(e.message);
        });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName, navigate]);

  return (
    <NavBar>
      <LogoArea>
        <Link to="/">
          <Logo src="../images/logo.svg" alt="Logo" />
        </Link>
      </LogoArea>
      {!userName ? (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      ) : (
        <>
          <NavItems>
            <Link to="/home">
              <img src="../images/home-icon.svg" alt="Home" />
              <span>HOME</span>
            </Link>
            <Link to="#">
              <img src="../images/search-icon.svg" alt="Search" />
              <span>SEARCH</span>
            </Link>
            <Link to="#">
              <img src="../images/watchlist-icon.svg" alt="Watchlist" />
              <span>WATCHLIST</span>
            </Link>
            <Link to="#">
              <img src="../images/original-icon.svg" alt="Originals" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="#">
              <img src="../images/movie-icon.svg" alt="Movies" />
              <span>MOVIES</span>
            </Link>
            <Link to="#">
              <img src="../images/series-icon.svg" alt="Series" />
              <span>SERIES</span>
            </Link>
          </NavItems>
          <Signout>
            <UserImgIcon src={photo} alt="UserIcon" />
            <Dropdown>
              <span onClick={handleAuth}>Sign out</span>
            </Dropdown>
          </Signout>
        </>
      )}
    </NavBar>
  );
};

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  background-color: #040714;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const LogoArea = styled(Link)`
  display: inline-block;
  width: 100px;
  height: 60px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavItems = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0 12px;
    text-decoration: none;
    color: white;

    img {
      height: 20px;
      width: 20px;
    }

    span {
      letter-spacing: 1px;
      font-size: 14px;
    }

    &:hover span::before {
      visibility: visible;
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  border: 2px solid #fff;
  box-shadow: 0px 4px 8px rgb(249, 249, 249 / 16%);
  background-color: #0d0d2b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #212121;
  }
`;

const UserImgIcon = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 100px;
  background-color: #212121;
  border: 1px solid gray;
  box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 10px 0px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  border-radius: 0.4rem;
  text-align: center;
  padding: 3px;
  opacity: 0;
`;

const Signout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: pointer;

  ${UserImgIcon} {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition: all 0.2s ease;
    }
  }
`;

export default Header;
