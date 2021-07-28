import './EnlacesHeader.css';
import { Link } from 'react-router-dom';


export default function EnlacesHeader () {
    return(
        <div className='EnlacesHeader'>
        <Link  className='Link'  to='/aboutus'><span className= "headerA"><p className='letras'>Quiénes somos</p></span>  </Link>
        <Link className='Link' to='/contact'><span className= "headerA" id='contact'><p className='letras'>Contáctanos</p></span></Link>          
                    
        </div>
    )
}

