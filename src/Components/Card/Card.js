import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({pId}){
    return(
        <article className='card' id='card'>
            <div><Link to={'/cardDetail/' + pId.id}><img className='img' src={pId.images.small} alt="Carta"></img></Link> </div>

        </article> 

    )
}