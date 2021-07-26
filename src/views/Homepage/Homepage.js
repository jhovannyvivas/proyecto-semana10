import './Homepage.css';
import { GetData } from '../../utils/getData';
import Titulo from './../../Components/Titulo/Titulo';


export default function Homepage() {
    let cards = GetData();
    console.log(cards);
    return(
        <div>
            <Titulo/>
        </div>
    )
}

//{cards.data[0].id}