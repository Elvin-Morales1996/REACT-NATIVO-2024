
import './App.css';
//importamos le ponemos un nombre y la direccion de la carpeta
import web from './imagenes/web.png'
//importar el boton 
import Boton from './componente/Boton';
//componente contador
import Contador from './componente/contador';

//usar hooks
import { useState} from 'react';

function App() {
  //      valor         funcion     valor inicial
  //HOOKS useStates: trabajar de estados
  const [numclicks, setNumero]= useState(0);

//crear la funcion boton click
const click = ()=>{
  //usamos la funcion y la variable la aumentamos en uno en uno
  setNumero(numclicks+1);

}

const reiniciar = ()=>{
    //solo le asignamos cero cuando de click
    setNumero(0);
}


  return (
    <div className="App">
    <div className='logo-contenedor'>
      <img 
      className='logo'
      //nombre de esa variable 
      src={web}
      alt='logo del contador'/>
      </div>
      <div className='principal'>
       
        <Contador numero={numclicks}/>
        <Boton
        texto={'click'}
        click={true}
        controlclick={click}/>
         <Boton
        texto={'reiniciar'}
        click={false}
        controlclick={reiniciar}/>


      </div>
    </div>
  );
}

export default App;
