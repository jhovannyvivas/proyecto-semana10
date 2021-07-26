import './Logo.css';
import logoPokemon from '../../Assets/img/logo pokemon.png';

export default function Logo(){
    return(
        <img className='imagen' src={logoPokemon} alt="logo">
        </img>
    )
}