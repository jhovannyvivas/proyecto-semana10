import { Link } from 'react-router-dom';
import titulo from '../../../Assets/img/logo pokemon.png';



export function TituloSolo() {
    const pokeTitulo =
    <div className='titulo'>
        <div id='tituloSolo'>
        <Link to='/'><img src={titulo} alt='titulo'></img></Link>
        </div>
    </div>;

    return pokeTitulo
}
