import { Link } from 'react-router-dom';
import './EnlacesHeader.css';



export default function EnlacesHeader () {
    return(
        <div className='EnlacesHeader'>
        <span className= "headerA"><Link href="/error404">Sobre Nostros</Link></span>
        <span className= "headerA"><Link to="/Contactanos">Contáctenos</Link></span>
        </div>
    )
}

