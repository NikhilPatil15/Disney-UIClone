import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Orignals = () => {
  const originals = useSelector(state=>state.movie.orignals)
  return (
    <Container>
      <h4>Orignals</h4>
      <Contents>
      {originals &&
          originals.map((movie, key) => {
            return(
            <Wrap key={movie.id}>
              <Link to={"/details/"+ movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap> 
            )
          })}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0 1rem 0;
  font-weight: 500;
  h4 {
        padding-bottom: 10px;
        letter-spacing: 1.5px;
     }
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    inset: 0px;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 1;
    transition: opacity 500ms ease-in-out 0s;
    top: 0;
    position: absolute;
    display: block;
    opacity: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Orignals;
