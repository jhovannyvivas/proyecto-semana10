import './Card-detail.scss';
import { GetData } from '../../utils/getData';
import Card from '../../Components/Card/Card';

import React from 'react';
import getID from './../../utils/getID';

export default function Detalles() {
    let a = getID(window);
    console.log(a);
    let Detalles = GetData();


    return(<div className= "container-detalles">
            
            
            <h2>Estas son las estadisticas de tu pokémon!</h2>

            <div className="card-container">

            </div>
            
            <div className="name-container">
                <p>*el nombre de tu Pokémon*</p>
            </div>
            
            <div className="card-container">
             
            </div>

            <div className="stats-container">
                <div><p>*tipo del pokémon*</p></div>
                <div><p>*vida del pokémon*</p></div>
            </div>






    </div>)
}