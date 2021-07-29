import  React from 'react' ; 
import Collapsible from 'react-collapsible';
import img from "../AboutUs/icon-linkedin.png";

import "./AboutUs.css";

 const Container = () =>{
    return(
        <div className="container">
        <div className ="text-1">   
        <Collapsible className="title-1" trigger= "Acerca de esta Pagina Web">
          <p >
           Esta es un proyecto desarrollado en React bajo una SPA+API y react Route, 
           siguiendo los parametros establecidos bajo el marco de la semana 10 del Proceso de aprendizaje en Alteru
          </p> 
        
          </Collapsible>
          </div>
          <div className ="text-2">   
        <Collapsible className="title-2" trigger="sobre los desarrolladores">
          <div className="container-developers">
          <p>
           Somos un grupo de desarrolladores fronted que aprendemos dia a dia sobre las tecnologias y frameworks existentes. conformado por:
          </p>
          <div className= "developers">
          <Collapsible className="developer"trigger="William Rodriguez">
      
           <p>fuerte en maquetacion, react, sass y en las blandas en el trabajo de equipo.
               si quieres saber mas sobre mi sigueme aqui <a href="https://www.linkedin.com/in/william-rodriguez-39b512b6/"><img src={img} widht="40px" height="40px" alt="icono linkedin" /></a>
           </p>
          </Collapsible>
          
          <Collapsible className="developer"trigger="Jhovanny Vivas">
      
           <p>fuerte en maquetacion, react, sass y en las blandas en el trabajo de equipo.
               si quieres saber mas sobre mi sigueme aqui <a href="https://www.linkedin.com/in/jhovannyvivas"><img src={img} widht="40px" height="40px" alt="icono linkedin" /></a>
           </p>
          </Collapsible>

          <Collapsible className="developer"trigger="Santiago Jimenez">
      
           <p>fuerte en maquetacion, react, sass y en las blandas en el trabajo de equipo.
               si quieres saber mas sobre mi sigueme aqui <a href="https://www.linkedin.com/in/santiago-jimenez-4852a0217/"><img src={img} widht="40px" height="40px" alt="icono linkedin" /></a>
           </p>
          </Collapsible>

          <Collapsible className="developer"trigger="Jesus cervantes">
      
           <p>fuerte en maquetacion, react, sass y en las blandas en el trabajo de equipo.
               si quieres saber mas sobre mi sigueme aqui <a href="https://www.linkedin.com/in/jesus-cervantes-a10775213/"><img src={img} widht="40px" height="40px" alt="icono linkedin" /></a>
           </p>
          </Collapsible>

          </div>

          
          </div>
          </Collapsible>
          </div>
    </div>
    )
};
export default Container;