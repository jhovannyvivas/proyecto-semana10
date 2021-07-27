import './App.css';
import Header from './Components/Header/Header';
import Homepage from './views/Homepage/Homepage';
import Titulo from './Components/Titulo/Titulo';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <main className="App">
      <Header/>
      <Titulo/>
      <Homepage/>
      <Footer/>
    </main>
  );
}

export default App;
