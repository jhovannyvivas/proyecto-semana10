import './Cards.css';
import { GetData } from '../../utils/getData';

export default function Cards(){
    let cards = GetData();
    return(
        <section className='grillaHome'>
            {cards.map((card) => card.name )}
        </section>
    )
}