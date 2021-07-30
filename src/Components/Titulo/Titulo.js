import './Titulo.css';
import { Link } from 'react-router-dom';
import { PokeTitulo } from './PokeTitulo/PokeTitulo';
import { TituloSolo } from './TituloSolo/TituloSolo';



export default function Titulo() {
    
    const a = <h1>Ashh</h1>
    function proceso (){

    }
    const al = <h1>Pinito</h1>;
    
    return (
        <section onMouseEnter={(int) => { if(int.target.children.length != 0){int.target.childNodes[0].className= 'Pokemon';int.target.childNodes[2].className= 'Pokemon';};  return console.log(int)}} onMouseLeave={(ex) => { if(ex.target.children.length != 0){ex.target.childNodes[0].className= 'SinPokemon';ex.target.childNodes[2].className= 'SinPokemon';};  return console.log(ex)} }>
            <PokeTitulo></PokeTitulo>
        </section>

    )
}
/*{(int)=> { return console.log(int)}} */