import './Homepage.css';
import { GetData } from '../../utils/getData';
import Titulo from './../../Components/Titulo/Titulo';
import Cards from './../../Components/Cards/Cards';


export default function Homepage() {
    let cards = GetData();
    console.log(cards);
    return(
        <div className='homepage'>
            <Cards/>

        </div>
    )
}

//{cards.data[0].id}