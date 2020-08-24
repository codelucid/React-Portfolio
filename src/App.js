import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <HashRouter basename="/">
      <div>
        <NavTabs />
        <Wrapper>
          <Header>Coop's React Portfolio!</Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
          <Route exact path="/projects" component={Projects} />
        
        <Footer>Thank you for visiting!</Footer>
      </div>

    </HashRouter>
  );
}


export default App;
