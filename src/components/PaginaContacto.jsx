import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            
          </ul>
        </nav>
      </header>

      <div className='home-container'>
        <div className="home-info">
          <div className="hero-content">
            <p className="hero-job-desc">Ponte en contacto conmigo</p>
            <div>
              <hr />
              <div className="home-container">
                <div className="home-info">
                  <div className="contact-form">
                    <form>
                      <label htmlFor="name">Nombre:</label>
                      <input type="text" id="name" name="name" />

                      <label htmlFor="email">Correo Electrónico:</label>
                      <input type="email" id="email" name="email" />

                      <label htmlFor="message">Mensaje:</label>
                      <textarea id="message" name="message" rows="4"></textarea>

                      <label htmlFor="subscribe">Quiero suscribirme a la <a href="https://newsletterknightmare.netlify.app/">Newsletter</a> de Knightmare</label>
                      <input type="checkbox" id="subscribe" name="subscribe" />

                      <button type="submit">Enviar Mensaje</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
