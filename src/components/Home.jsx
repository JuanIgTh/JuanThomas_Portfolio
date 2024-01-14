import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <div className='home-container'>
        <div className="home-info">
          <div className="hero-content">
            <h1>Juan Thomas</h1>
            <hr />
            <p className="hero-job"><span>Desarrollador y diseñador FrontEnd</span></p>
            <p className="hero-job-desc">Miembro del Staff de DigitalEvolution S.A y creador de <a href="https://knightmare.netlify.app/">Knightmare</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
