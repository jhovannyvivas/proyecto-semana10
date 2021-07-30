import './Card-detail.scss';
import {GetData} from '../../utils/getData';
import React from 'react';
import getID from './../../utils/getID';

export default function Detalles() {

    let a = getID(window);
    
    //  a es el id 
    console.log(a)
    let cards = GetData();
    var af = [];
    console.log(cards)
    if(cards.length>0){
        for(var i = 0; i < 29; i ++){
   
            if (cards[i].id === a){
                af = cards[i];
                console.log("arreglo ");
                console.log(af);
            }
        }
    }

    console.log(af);


    return(<div className= "container-detalles">
            
            
            <h2>Estas son las estadisticas de tu pokémon!</h2>

            <div className="card-container">
                <img src={af.images.small} alt={af.name} />
                <h1>{af.name}</h1>
                <p>hp: {af.hp}</p>
                <p>level: {af.level}</p>
                <p>tipo: {af.types}</p>
                <p>evoluciona de: {af.evolvesFrom}</p>
               

            </div>

  






    </div>)
    
}
/*
{cards.map((card1) => <Detail key={card1.id} pId={card1}/> )}
*/