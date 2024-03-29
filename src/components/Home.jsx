import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import ViewCards from "./ViewCards";
const Home = () => {
  return (
    <Container>
      <ImageSlider/>
      <ViewCards/>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    position: absolute;
    background: url("../images/home-background.png") center center /
      cover no-repeat fixed;
    content: "";
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
