import "./App.css";
//importar la imagen
import imagenLogo from "./imagenes/react.jpg";
//importar el componente boto
import Boton from "./componentes/Boton";

function App() {
  return (
    <div className="App">
      {/*
          También podemos tener
          comentarios multilínea
      */}
      <div className="freecodecamp-logo-contenedor">
        <img
          src={imagenLogo}
          className="freeacodecamp-logo"
          alt="lo de react para la calculadora"/>
      </div>
      {/*contenido de la calculadora
      botones, input etc.*/}
        <div className="contenido-calculadora">
          {/**crear 5 filas que contendras los botones */}
          <div className="fila">
            <Boton>1</Boton>

          </div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>

        </div>
    </div>
  );
}

export default App;
