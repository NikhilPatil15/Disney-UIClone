import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };
  return (
    <ImgSlider {...settings}>
      <Wrap>
        <Link>
          <img src="../images/slider-badging.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="../images/slider-badag.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="../images/slider-scale.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="../images/slider-scales.jpg" alt="" />
        </Link>
      </Wrap>
    </ImgSlider>
  );
};

const ImgSlider = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    z-index: 1;
    height: 100%;
    width:10rem;
    &:hover {
     
      color: white;
      opacity: 1;
      transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) ease;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: gray;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  a {
    border-radius: 1rem;
    position: relative;
    display: block;
    padding: 4px;
    cursor: pointer;

  }

  img {
    width: 100%;
    height: 100%;

  }
  &:hover{
    padding: 0;
        border: 4px solid rgba(269, 269, 269, 0.8);
        transition: all 100ms ease-in-out ;

    }
`;
export default ImageSlider;
