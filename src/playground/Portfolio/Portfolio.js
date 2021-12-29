import React from "react";
import {BrowserRouter as Router, Routes, Route,NavLink, Link, useParams} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Home Page</h1>
  <NavLink to="/">Home</NavLink>
  <NavLink to="contact">Contact</NavLink>
  <NavLink to="portfolio">Portfolio</NavLink>
  </header>
);
const Contact = () => (
  <div>
     <h1>Contact Me!</h1>
  <p> fooof asdas dasd asdd </p>
  </div>
);
const Welcome = () => (
  <p>Welcome to my portfolio</p>
);
const NotFound = () => (
  <p>404! Meeeh!</p>
);
const Portfolio = () => (
  <div>
    <h1>My work</h1>
    <p>check this out</p>
    <Link to="/portfolio/1">item one</Link>
    <Link to="/portfolio/2">item two</Link>
  </div>
);
const PortfolioItem = () => {
  const params = useParams();
  return (
  <div>
    <h1> A Thing I've done</h1>
    <p>this is a thing I've done {params.id}</p>
  </div>
);
};

const Home= () => (
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
    <Route path ="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio/:id" element={<PortfolioItem />} />
  </Routes>
</Router>
);

export default Home;