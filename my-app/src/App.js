import React from "react";
import Header from "./components/Header/Header";
import Navleft from "./components/Nav/Navleft";
import Container from "./components/Container/Container";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <Navleft />
        <Container />
      </div>
    </>
  );
}

export default App;
