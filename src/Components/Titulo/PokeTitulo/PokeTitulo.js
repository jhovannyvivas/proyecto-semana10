import { Link } from 'react-router-dom';
import titulo from '../../../Assets/img/logo pokemon.png';
import squartol from '../../../Assets/img/squartol.svg';
import pikachu from '../../../Assets/img/pikachu.svg';


export function PokeTitulo() {
    const pokeTitulo =
    <div className='titulo'>

        
        <div className='SinPokemon'>
            <Link to='/'><img src={squartol}></img></Link>
        </div>

        <div>
            <Link to='/'><img src={titulo} alt='titulo'></img></Link>
        </div>
        
        <div className='SinPokemon'>
            <Link to='/'><img src={pikachu}></img></Link>
        </div>
        

    </div>;

        
    
    return pokeTitulo
}
