import './Card-detail.scss';
import { GetData } from '../../utils/getData';
import Detail from '../../Components/Card/details/Detail';
import React from 'react';
import getID from './../../utils/getID';

export default function Detalles() {

    let a = getID(window);
    
    //  a[2] es el id 
    console.log(a)
    let cards = GetData();

    
    console.log(cards[0])
    for(var i = 0; i < 29; i ++){
        var af = [];
        if (cards[i]?.id? == a){
            af = cards[i];
            console.log("arreglo ");
            console.log(af);
        }
    }
    console.log(af)
    return(<div className= "container-detalles">
            
            
            <h2>Estas son las estadisticas de tu pokémon!</h2>

            <div className="card-container">

            {cards.map((card1) => <Detail key={card1.id} pId={card1}/> )}

            </div>

  






    </div>)
    
}
/*

*/