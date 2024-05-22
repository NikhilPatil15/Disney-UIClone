import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import ViewCards from "./ViewCards";
import Recommends from "./Recommends";
import NewToDisney from "./NewToDisney";
import Orignals from "./Orignals";
import Trending from "./Trending";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../redux/features/movies";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const tr = useSelector((state)=>state.movie)
  let recommends = [];
  let newToDisney = [];
  let originals = [];
  let trendings = [];

  const getDocuments = async () => {
    //connecting database and collection
    const data = collection(db, "movies");


    //fetching documents
    const dataSnapshot = await getDocs(data);

    //reading each document and separating them as per their type
    dataSnapshot.docs.map((doc) => {
      switch (doc.data().type) {
        case "recommend":
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
          break;
        case "new":
          newToDisney = [...newToDisney, { id: doc.id, ...doc.data() }];
          break;
        case "original":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;
        case "trending":
          trendings = [...trendings, { id: doc.id, ...doc.data() }];
          break;
      }
    });

   //adding the fetched documents in to the store so that each component can access it 
    dispatch(
      setMovies({
        recommended: recommends,
        newDisney: newToDisney,
        orignals: originals,
        trending: trendings,
      })
    );

  };
  useEffect(() => {
    getDocuments();
  }, [userName]);

  console.log(tr);
 
  return (
    <Container>
      <ImageSlider />
      <ViewCards />
      <Recommends />
      <NewToDisney />
      <Orignals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    position: absolute;
    background: url("../images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
