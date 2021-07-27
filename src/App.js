import "./App.css";
import Contactanos from "./views/Contactanos/Index";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./views/Homepage/Homepage";
import { BrowserRouter as Router } from "react-router-dom";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/Contactanos">
            <Contactanos />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
