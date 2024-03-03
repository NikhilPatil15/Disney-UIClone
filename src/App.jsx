import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import "./App.css";
import { Header, Login } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
