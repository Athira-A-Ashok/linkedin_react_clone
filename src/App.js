import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landingpage from "./Components/Landingpage/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landingpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
