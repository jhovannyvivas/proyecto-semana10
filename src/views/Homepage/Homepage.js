import './Homepage.css';
import { GetData } from '../../utils/getData';


export default function Homepage() {
    let cards = GetData();
    console.log(cards);
    return(
        <div>

        </div>
    )
}

//{cards.data[0].id}