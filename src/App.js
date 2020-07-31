import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
          <Header>Coop's React Portfolio!</Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Wrapper>
        <Footer>Thank you for visiting!</Footer>
      </div>

    </Router>
  );
}

export default App;
