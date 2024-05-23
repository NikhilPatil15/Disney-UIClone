import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import styled from "styled-components";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const getDocuments = async () => {
    //selecting the document from the firestore with given id
    const documentRef = doc(db, "movies", id);

    //fetching that document
    const fetchedDocument = await getDoc(documentRef);

    //checks if the document with given id presents or not
    if (fetchedDocument.exists) {
      setData(fetchedDocument.data());
    }
  };

  useEffect(() => {
    getDocuments();
  }, [id]);

  console.log(data);

  return (
    <Container>
      <BackgroundImage>
        <img src={data.backgroundImg} alt={data.title} />
      </BackgroundImage>
      <ImageTitle>
        <img src={data.titleImg} alt={data.title} />
      </ImageTitle>
      <Content>
        <Controls>
          <Player>
            <img src="../images/play-icon-black.png" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="../images/play-icon-white.png" />
            <span>Trailer</span>
          </Trailer>
          <Addlist>
            <span/>
            <span/>
          </Addlist>
          <GroupWatch>
            <div>
              <img src="../images/group-icon.png" />
            </div>
          </GroupWatch>
        </Controls>
        <Subtitle>{data.subTitle}</Subtitle>
        <Description>{data.description}</Description>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const BackgroundImage = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  opacity: 0.6;
  z-index: -1;

  img {
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
      object-fit: cover;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  height: 20vw;
  min-height: 10rem;

  @media (max-width: 768px) {
    height: 35vw;
  }
`;

const Content = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin: 10px 0 20px 0;
  gap: 1rem;

  @media (max-width:768px) {
    gap: .1rem;
  }
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 0.4rem 0.8rem;
  background-color: rgb(249, 249, 249);
  border-radius: 0.5rem;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 18px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(249, 249, 249);
  border: 1px white solid;

  &:hover {
    background-color: rgb(100, 100, 100);
  }
`;

const Addlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  border: 2px solid white;
  span{
    background-color: rgb(249,249,249);
    display: inline-block;

    &:first-child{
      height:2px;
      width: 16px;
      transform: translate(1px,0px)rotate(0deg);
    }

    &:nth-child(2){
      height:16px;
      width: 2px;
      transform: translateX(-8px)rotate(0deg);
    }
    
  }
  &:hover{
    background-color: rgb(100, 100, 100);
  }
`

const GroupWatch = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  border: 2px solid white;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img{
    width: 100%;
  }

  &:hover{
    background-color: rgb(100, 100, 100);
  }
`

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;



export default Details;
