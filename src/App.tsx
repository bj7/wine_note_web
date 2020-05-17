import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TastingNotes from "./TastingNotes";
import { NavHeader } from "./NavHeader"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavHeader/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <TastingNotes/>
}

export default App;
