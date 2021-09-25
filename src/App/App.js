import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/gallery/:id" component={Gallery} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;
