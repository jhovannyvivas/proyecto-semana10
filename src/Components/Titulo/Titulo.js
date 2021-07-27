import './Titulo.css';
import titulo from '../../Assets/img/logo pokemon.png'


export default function Titulo() {
    return(
        <div className='titulo'>
            <div>
            <img src={titulo}>
            </img>
            </div>
        </div>
        
    )
}