import './Titulo.css';
import titulo from '../../Assets/img/logo pokemon.png'
import { Link } from 'react-router-dom';


export default function Titulo() {
    return(
        <div className='titulo'>

            
            <div>
            <Link to='/'><img src={titulo} alt='titulo'></img></Link>
            </div>

        </div>
        
    )
}
//<div  className='pokemon'>Contacto</div>
//<div className='pokemon'>Contacto</div>