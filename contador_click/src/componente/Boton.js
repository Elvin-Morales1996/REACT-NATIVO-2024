import React from 'react';
import '../hojas-estilo/bton.css';

//crear la funcion recibe tres props
function Boton({texto, click, controlclick}){
    return(
        <button
        //if ternario que si es click le dara clase  sino le dara otra clase
        className={click ? 'boton-click': 'boton-reinicio'}
        //controlclick: es una funcion que llamemos la funcion
        //al momento que demos click
        onClick={controlclick}>
            {texto}
        </button>
    );
}


export default Boton;




















