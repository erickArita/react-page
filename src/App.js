import React from 'react';
import "./styles/stylos.scss"
import Curso from './curso'
const App= () =>(
<>
<div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://images.alphacoders.com/557/557093.jpg" alt="wallpaper-banner" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Plataforma INSUCA</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">Aprender</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    <Curso /> 
  </div>
  
</>
)

//reglas
//1.todo etiqueta debe cerrarse
//2.los componentes deben devolver un solo elemento padre
//3.apoyarse de los fragment cuando necesito devolver 2 elementos <> hijos</>
//5.img siempre se cierra
//6.class=ClassName
//7.for =>Htmlfor







export default App;
