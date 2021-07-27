import './Logo.css';
import logoPokemon from '../../Assets/img/titulo3.png';

export default function Logo(){
    return(
        <span className="headerImg"><a href="#home">
            <img src={logoPokemon} alt="Logo"/>
        </a></span>
    )
}

