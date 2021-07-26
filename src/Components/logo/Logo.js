import './Logo.css';
import logoPokemon from '../../Assets/img/logo pokemon.png';

export default function Logo(){
    return(
        <span class="headerImg"><a href="#home">
            <img src={logoPokemon} alt="Logo"/>
        </a></span>
    )
}

