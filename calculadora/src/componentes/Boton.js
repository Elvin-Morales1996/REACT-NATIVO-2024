
/*creamo el componente Boton */

function Boton (props){
    const esOperador = (valor) =>{
        return isNaN(valor) && valor !=='.' && valor !== '=';
    };
    return (

       /*tamplate literals */
    
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}> 
            
            {props.children}
        </div>
    );
}

export default Boton;