
import React from "react";
import '../style/boton.css';


function Boton(props){
    //funcion para validar si es una expresion arimetica
    const esoperador = valor=>{
        //validar que si valor es punto o es igual 
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return(
        <div
        //hacer un if para que las operaciones arimetica den una clase operador
        className={`bton-contenedor ${esoperador(props.children) ? 'operador': null}`.trimEnd()}>
            
            {props.children}

        </div>
    );
}
export default Boton ;