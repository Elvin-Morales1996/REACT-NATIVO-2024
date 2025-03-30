import "./App.css";
//importar la imagen
import imagenLogo from './imagenes/react.jpg';

function App() {
  return <div className="App">
        {/*
          También podemos tener
          comentarios multilínea
      */}
    <div className="freecodecamp-logo-contenedor">
      <img 
        src={imagenLogo}
        className="freeacodecamp-logo"
        alt = "lo de react para la calculadora"/>

     </div>
    </div>;
}

export default App;
