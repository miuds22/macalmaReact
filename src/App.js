import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from "react";
import Navbar from './Components/Navbar';

function App() {
 
  //Hook
  const [servicios, agregarServicios] = useState(
    [
      {id:1 ,clase:"rail", nombre:"Continuum 17/6", texto:"Los esperamos como siempre con mucha magia y Rock para divertirse. Compra tu entrada en el siguiente link",link:"/disco-macalma" , img:"/sources/imgs/maca.jpg"},
      {id:2 ,clase:"railReverse", nombre:"El Galpon 20/5", texto:"Nos vemos este Sabado en el Galpon para mas musica ruidosa",link:"/disco-macalma" , img:"/sources/imgs/pela.jpg"} 
    ]
    ); 

  const redSocial = 'FEISBU'
  return (
    <div className='dark container-fluid'>
       <Header/>
       <Navbar/>
       <div className='container'  id='principal'>
        <div className='blank'></div>
      
        <div className='oscurecido'>
          
        {
        servicios.map(servicio => (
          <div className={servicio.clase}> 
                <div className='railceld'><img className='img' src={servicio.img}></img></div>
                <div className='railceld'>
                    <h2>{servicio.nombre}</h2>
                    <h4>{servicio.texto}</h4>
                    <a>
                     <button type="button" class="btn btn-danger">Conseguir mi entrada</button>
                    </a>
                </div>
          </div>
        ))
      }
        </div>
      
       </div>
   
      <Footer
        redSocial={redSocial}
      />
    </div>
  );
}

export default App;
