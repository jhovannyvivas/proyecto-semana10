import './Card-detail.scss';
import { GetData } from '../../utils/getData';
import Detail from '../../Components/Card/details/Detail';

import React from 'react';
import getID from './../../utils/getID';

export default function Detalles() {
    let a = getID(window);
    
    //  a[2] es el id 

    let cards = GetData();


    return(<div className= "container-detalles">
            
            
            <h2>Estas son las estadisticas de tu pokémon!</h2>

            <div className="card-container">

            {cards.map((card1) => <Detail key={card1.id} pId={card1}/> )}

            </div>

  






    </div>)
}