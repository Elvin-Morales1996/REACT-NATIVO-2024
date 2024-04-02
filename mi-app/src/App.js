import './App.css';
//se importa el componente para que se pueda usar
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div><h1>esto es lo que dicen los alumnos</h1></div>
      <div className='contenedor-principal'>
       <Testimonio 
       nombre='elvin josue morales hernandez'
       pais='el salvador'
       imagen='bart'
       cargo='full stack junior'
       empresa='kodigo'
       testimonio='aprendi a desarrollador web y estoy estudiando tecnico en desarrollo de software en el gobierno y
       estudiando ingenieria en sistemas informaticos'
       
       />
       
          <Testimonio 
       nombre='oscar morales hernandez'
       pais='panama'
       imagen='bob'
       cargo='java'
       empresa='kodigo'
       testimonio='dvsbfpbfofrbdfsbvdjibvibveibvibveivieibviebvirebi'
       
       />
          <Testimonio 
       nombre='luis roberto morales hernandez'
       pais='guatemala'
       imagen='mario'
       cargo='react'
       empresa='kodigo'
       testimonio='ortnvortvn9rtv9urtnvrt9unvt9vnrt9vnr9nvr9vnrt9vnt9vrt9vn'
       
       />
     </div>
    </div>
  );
}


export default App;
