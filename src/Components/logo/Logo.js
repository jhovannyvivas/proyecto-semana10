import './Logo.css';
import logoPokemon from '../../Assets/img/titulo3.png';
import Imagen from './Imagen/Imagen';

export default function Logo(){



    return(
        <span className="headerImg" onMouseEnter={(e)=> console.log(e.target.innerText='árbol')} onMouseLeave={(ev) => ev.target.innerText="ssss"}>

            <Imagen/>
        </span>
    )
}

//