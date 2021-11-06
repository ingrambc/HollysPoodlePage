import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import MyDogs from "./pages/MyDogs";
import AvailablePuppies from "./pages/AvailablePuppies";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
        <Header />
        <Wrapper>
          <Route exact path="/MyDogs" component={ MyDogs } />
          <Route exact path="/AvailablePuppies" component={ AvailablePuppies } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path={["/", "/about"]} component={ About } />
        </Wrapper> 
        <Footer />

    </Router>
  );
}

export default App;