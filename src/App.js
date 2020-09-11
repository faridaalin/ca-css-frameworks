import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./index.scss";

import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/footer/Footer";

const StickyFooter = styled.div`
  flex: 1 0 auto;
`;

function App() {
  return (
    <>
      <StickyFooter>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
      </StickyFooter>
      <Footer />
    </>
  );
}

export default App;
