import './Contactanos.scss';
import React from 'react';


export default function Contactanos() {
    return(<div className="container-contactanos">
    <h2>Nos pondremos en contacto contigo, solo dejanos tus comentarios.</h2>
        <form className="form-contacto" action="/" method="post">
        <label htmlFor="Nombre">Nombre</label>  
            <input className="Nombre" type="text" id="Nombre" placeholder="Ingrese Nombre" required />
            
            <label htmlFor="Apellidos">Apellidos</label>
            <input className="apellidos" type="text" id="Apellidos" placeholder="Ingrese Apellidos" required />
            
            <label htmlFor="Email">Email</label>
            <input className="email" type="text" id="Email" placeholder="Ingrese Email" required />
            
            <label htmlFor="Telefono">Telefono</label>
            <input className="telefono" type="text" id="Telefono" placeholder="Ingrese Telefono" required />
            
            
            <label htmlFor="Ciudad">Ciudad</label>
            <input className="ciudad" type="text" id="Ciudad" placeholder="Ingrese Ciudad" required />
            
            
            <label htmlFor="Pais">Pais</label>
            <input className="pais" type="text" id="Pais" placeholder="Ingrese Pais" required />
            
            <label htmlFor="Web">Web</label>
            <input className="web" type="text" id="Web" placeholder="Ingresa Web" />
        </form>
               
            <label className="comentarios-label" htmlFor="Comentarios">Comentarios</label>
            <input className="comentarios" type="text" id="Comentarios" placeholder="Dejanos tus Comentarios" />
            <form className="form-politica" action="/" method="post">
                <input type="checkbox" className="politica de privacidad." id="Politica-Privacidad" required />
                <label htmlFor="Politica-Privacidad">Acepto la Politica de privacidad</label>
           </form>
            <button className="button-conectanos">Solicita Informacion</button>

    </div>
    )
}