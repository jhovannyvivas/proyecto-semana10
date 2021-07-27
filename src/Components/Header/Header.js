import { Link } from 'react-router-dom'
import EnlacesHeader from '../EnlacesHeader/EnlacesHeader'
import Logo from '../logo/Logo'
import './Header.css'

export default function Header() {
    return(
        <header className='header'>
            <Link to='/'><Logo></Logo></Link>
            <EnlacesHeader/>
            
        </header>

    )
}

