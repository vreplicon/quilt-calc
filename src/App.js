import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  return (
    <main className="App">
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </main>
  );
}

export default App;