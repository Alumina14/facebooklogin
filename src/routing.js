import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function RoutingHome() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
         
  }