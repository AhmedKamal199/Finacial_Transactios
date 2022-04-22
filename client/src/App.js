import React, { useState, useEffect } from "react";
import AppNavbar from "./components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Wa from "./components/Wa";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Wa />
      {/* <Container>
          <ItemModal />
          <ShoppingList />
        </Container> */}
    </div>
  );
}

export default App;
