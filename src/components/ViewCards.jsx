import React from "react";
import styled from "styled-components";
const ViewCards = () => {
  return (
    <Container>
      <Wrap>
        <img src="../images/viewers-pixar.png" alt="Pixar" />
        <video autoPlay={true} loop={true} playsInline={true} >
            <source src="../videos/1564676714-pixar.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="../images/viewers-disney.png" alt="Disney" />
        <video autoPlay={true} loop={true} playsInline={true} >
            <source src="../videos/1564674844-disney.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="../images/viewers-marvel.png" alt="Marvel" />
        <video autoPlay={true} loop={true} playsInline={true} >
            <source src="../videos/1564676115-marvel.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="../images/viewers-national.png" alt="national" />
        <video autoPlay={true} loop={true} playsInline={true} >
            <source src="../videos/1564676296-national-geographic.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="../images/viewers-starwars.png" alt="Starwars" />
        <video autoPlay={true} loop={true} playsInline={true} >
            <source src="../videos/1608229455-star-wars.mp4"/>
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
  grid-gap: 1rem;
  padding: 30px 0px 26px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
    padding-top: 59%;
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;

  img{
    inset: 0px;
    object-fit: cover;
    height:100%;
    width: 100%;
    opacity: 1;
    display: block;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }

  video{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    display: block;
    inset: 0px;
    opacity: 0;
  }
  &:hover{
    video{
        opacity: 1;
        transition: all 1s  ease-in-out 0s;
    }
    img{
        transform: scale(1.2);
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ease-in-out 0s;
    }
    transform: scale(1.05);
    border: 3px solid white;
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) eas
  }
`;

export default ViewCards;
