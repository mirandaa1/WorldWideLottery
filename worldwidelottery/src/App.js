import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SessionPlayers from "./components/SessionPlayers/SessionPlayers";
import Stats from "./components/Stats/Stats";
import Winners from "./components/Winners/Winners";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/winners">
            {" "}
            <Winners />
          </Route>
          <Route path="/sessionPlayers">
            <SessionPlayers />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
