import './App.css';
import Header from './Components/Header/Header';
import Homepage from './views/Homepage/Homepage';
import Contactanos from './views/Contactanos/Index'
import Detalles from './views/Card-detail';
import Titulo from './Components/Titulo/Titulo';
import Footer from './Components/Footer/Footer';
import {  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Router>
        <Header contact="Contáctenos" />
        <Titulo/>
          <Switch>
              <Route path="/cardDetail/:id">
                <Detalles/>
              </Route>
              <Route path="/contact">
                <div> <Contactanos /></div>
              </Route>
              <Route path="/aboutus">
                <div>Sección sobre nosotros</div>
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
