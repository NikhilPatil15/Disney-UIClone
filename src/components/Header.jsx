import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignOut, setUserLogin } from "../redux/features/user";

const Header = () => {
  const myref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
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

  function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
  }

  const handleAuth = () => {
    if (!userName) {
     if(detectMob()){
        signInWithRedirect(auth, provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => alert(error.message));
        }else{
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
  }, [userName]);
  return (
    <NavBar>
      <LogoArea>
        <Link to="/">
          <Logo src="../images/logo.svg" />
        </Link>
      </LogoArea>
      {/* <NavItems className="drop">
        <img src="../images/dropdown.png"/>
       </NavItems> */}
      
      {!userName ? (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      ) : (
        <>
          <NavItems>
            <Link to={"/home"}>
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

  /* .drop{
    display: none;
  } */

  /* @media (max-width:768px) {
    .drop{
      display:block;
      width: fit-content;
      background-color: white;
    } */
  

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
      top:3px;
      letter-spacing: 3px;
      line-height: 1.4;
      white-space: nowrap;
      font-size: 18px;

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
  @media (max-width:1200px){
    display: none;

  }
`;

const LoginButton = styled(Link)`
  border: 2px solid #fff;
  box-shadow: 0px 4px 8px rgb(249, 249, 249 / 16%);
  background-color: #0d0d2b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  padding: 8px 16px;

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
  box-shadow: rgb(0, 0, 0/50%) 0px 0px 10px 0px;
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
  

  ${UserImgIcon}{
      border-radius: 50%;
      object-fit:cover;
      width: 100%;
      height: 100%;
  }

  &:hover{
    ${Dropdown}{
      opacity: 1;
      transition: all 0.2s ease;
    }
  }
`;



export default Header;