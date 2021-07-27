import './Card.css';

export default function Card({pId}){
    return(
        <article className='card'>
            <div> <img src={pId.images.small} alt="Carta"></img> </div>

        </article> 

    )
}