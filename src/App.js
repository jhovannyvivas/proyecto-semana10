import './App.css';
import Header from './Components/Header/Header';
import Homepage from './views/Homepage/Homepage';
import Titulo from './Components/Titulo/Titulo';
import Footer from './Components/Footer/Footer';
import Container from '../src/Pages/AboutUs/index';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <main className="App">
      <Router>
        <Header contact="Contáctenos" />
        <Titulo/>
          <Switch>
              <Route path="/cardDetail/:id">
                <div>Detalle de la tarjeta</div>
              </Route>
              <Route path="/contact">
                <div>Contactenos</div>
              </Route>
              <Route path="/aboutUs">
                <div><Container/></div>
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
          </Switch>
          <Footer/>
      </Router>



    </main>
  );
}

export default App;
