import './Cards.css';
import { GetData } from '../../utils/getData';
import Card from './../Card/Card';

export default function Cards(){
    let cards = GetData();
    return(
        <section className='grillaHome'>
            {cards.map((card1) => <Card key={card1.id} pId={card1}/> )}
        </section>
    )
}