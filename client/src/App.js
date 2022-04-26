import React, { useState, useEffect } from "react";
import AppNavbar from "./components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Wa from "./components/Wa";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Showcase />
      <Wa />
      <Footer />
      {/* <Container>
          <ItemModal />
          <ShoppingList />
        </Container> */}
    </div>
  );
}

export default App;
