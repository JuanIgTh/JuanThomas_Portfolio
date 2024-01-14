import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Proyectos = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      

      <div className='home-container'>
        <div className="home-info">
          <div className="hero-content-proyect">
            <p className="hero-job"><span>¡Échale un vistazo a mis proyectos en GitHub!</span></p>
            <div className="heartbeat">
              <a href="https://github.com/JuanIgTh">
                <img src="https://pngimg.com/uploads/github/github_PNG32.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
