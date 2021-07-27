import './EnlacesHeader.css';
import { Link } from 'react-router-dom';


export default function EnlacesHeader () {
    return(
        <div className='EnlacesHeader'>
        <Link  className='Link'  to='/aboutus'><span className= "headerA">Sobre Nostros</span>  </Link>
        <Link className='Link' to='/contact'><span className= "headerA">Contáctenos</span></Link>          
                    
        </div>
    )
}

