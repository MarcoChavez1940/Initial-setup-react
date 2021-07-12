import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App