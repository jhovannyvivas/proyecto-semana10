import React from "react";
import Collapsible from "react-collapsible";
import img from "../AboutUs/linkedin-brands.svg";

import "./AboutUs.css";

const Container = () => {
  return (
    <div className="container">
      <div className="text-1">
        <Collapsible className="title-1" trigger="Acerca de esta Pagina Web">
          <p>
            Esta es un proyecto desarrollado en React bajo una SPA+API y react
            Route, siguiendo los parametros establecidos bajo el marco de la
            semana 10 del Proceso de aprendizaje en Alteru
          </p>
        </Collapsible>
      </div>
      <div className="text-2">
        <Collapsible className="title-2" trigger="Acerca de los desarrolladores">
          <div className="container-developers">
            <p>
              Somos un grupo de desarrolladores fronted en continuo aprendizaje
              sobre las tecnologias y frameworks existentes. conformado por:
            </p>
            <div className="developers">
              <Collapsible className="developer" trigger="William Rodriguez">
                <p>
                Siempre pensando en cambiar mi futuro y el de mis hijos, 
                he emprendido en varias formas y aunque he tenido tropiezos he seguido luchando por mis sueños y aprendiendo de esas valiosas lecciones que nos va dando la vida. Soy muy tranquilo y me gusta disfrutar de las cosas sencillas por lo que he aprendido a ser feliz con lo que tengo eso si sin dejar de buscar el ser mejor cada día.
                <br/>
                Siempre me mantengo enfocado en mis objetivos,
                soy un líder por naturaleza, al momento de trabajar en equipo me gusta que en el todos aportemos y aprendamos, un buen compañero, empático con los
                demás, muy colaborativo a las personas y a mi trabajo.
                  <br/>
                  si quieres saber mas sobre mi sigueme aqui{" "}
                  <a href="https://www.linkedin.com/in/william-rodriguez-39b512b6/">
                    <img src={img} alt="icono linkedin" />
                  </a>
                </p>
              </Collapsible>

              <Collapsible className="developer" trigger="Jhovanny Vivas">
                <p>
                 estoy en el desarrollo web por la estabilidad laboral,  las matemáticas y las alternativas para el futuro. Aspiro ir al extranjero y mejorar aspectos económicos y sociales.
                  Me interesan la digitalización de empresas, ong's, iglesias y universidades.
                  <br/>
                  Tengo bases en node. js, javascrip, html, css, react js, webpack, bootstrap, en editor de texto visual studio code, y en consola Git.
                  <br />
                  si quieres saber mas sobre mi sigueme aqui{" "}
                  <a href="https://www.linkedin.com/in/jhovannyvivas">
                    <img src={img} alt="icono linkedin" />
                  </a>
                </p>
              </Collapsible>

              <Collapsible className="developer" trigger="Santiago Jimenez">
                <p>
                Apasionado de la tecnología, las artes visuales y del inglés. Autodidacta y creativo.
                <br/>
                 me destaco por el trabajo en equipo, me adapto muy rapido a cualquier entorno de trabajo 
                  <br />
                  si quieres saber mas sobre mi sigueme aqui{" "}
                  <a href="https://www.linkedin.com/in/santiago-jimenez-4852a0217/">
                    <img src={img} alt="icono linkedin" />
                  </a>
                </p>
              </Collapsible>

              <Collapsible className="developer" trigger="Jesus cervantes">
                <p>Ingeniero electrónico, apasionado por la tecnología y vehículos de motor, me gusta aprender cosas nuevas. Soy un entusiasta de la vida, de viajar y conocer muchos lugares, me gusta llevar a cabo mis actividades de la manera más optima posible y profesional.

                   <br/>Poseo fortalezas en react, css,html y javascript.
                  tengo una gran capacidad de acoplarme a las situaciones que se
                  presenten,compañerismo y liderazgo.Rápido aprendizaje, adaptabilidad, 
                  oratoria en público, trabajo en equipo, creatividad, Manejo de personal, 
                  resolución de problemas y manejo un nivel intermedio en inglés
                  <br />
                  si quieres saber mas sobre mi sigueme aqui{" "}
                  <a href="https://www.linkedin.com/in/jesus-cervantes-a10775213/">
                    <img src={img} alt="icono linkedin" />
                  </a>
                </p>
              </Collapsible>
            </div>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};
export default Container;
