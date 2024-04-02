/*siempre que se crea un componenten
se debe importar React */
import React from "react";

/*importar css */
import '../estilo/testimonio.css';


//se crea una funcion con la primera leta mayuscula
function Testimonio(props){
  /*esta es la estructura de un componente */
    return(
      <div className='contenido-testimonio'>

        <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="foto de emma"
        />

        <div className="contenedor-text-testimonio">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
          <p className="texto-testimonio">{props.testimonio}</p>


        </div>
      </div>
    );
}
//siempre se debe exportar para que se pueda usar
export default Testimonio;









