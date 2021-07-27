import './Logo.css';
import logoPokemon from '../../Assets/img/titulo3.png';
import Funcion1 from './funcion1/Funcion1';

export default function Logo(){
    let cast = 'castidad'
    return(
        <span className="headerImg" onMouseEnter={()=> alert('')}>

            <Funcion1 pureza={cast?}/>
        </span>
    )
}

//<img src={logoPokemon}  alt="Logo"/>