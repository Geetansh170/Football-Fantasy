import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import GithubState from "./context/foot/FootState";
import Home from "./components/pages/Home";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
