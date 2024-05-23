import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Details, Header, Login } from "./components";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
