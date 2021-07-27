import './Logo.css';
import logoPokemon from '../../Assets/img/logo pokemon.png';
import { Link } from 'react-router-dom';

export default function Logo(){
    return(
        <span class="headerImg"><Link to="/home">
            <img src={logoPokemon} alt="Logo"/>
        </Link></span>
    )
}

