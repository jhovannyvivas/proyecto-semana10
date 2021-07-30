import './Titulo.css';

import { PokeTitulo } from './PokeTitulo/PokeTitulo';




export default function Titulo() {
    

   
    return (
        <section onMouseEnter={(int) => { if(int.target.children.length !== 0){int.target.childNodes[0].className= 'Pokemon';int.target.childNodes[2].className= 'Pokemon';};  return console.log(int)}} onMouseLeave={(ex) => { if(ex.target.children.length !== 0){ex.target.childNodes[0].className= 'SinPokemon';ex.target.childNodes[2].className= 'SinPokemon';};  return console.log(ex)} }>
            <PokeTitulo></PokeTitulo>
        </section>

    )
}
