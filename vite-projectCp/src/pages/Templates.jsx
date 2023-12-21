import webT from '../assets/webT1.png'
import './styles/Templates.css'

import svgBnb from '../assets/svg-bnb.svg'
import svgEth from '../assets/svg-eth.svg'
import svgVite from '../assets/vite-svgrepo-com.svg'
import svgReact from '../assets/react-svgrepo-com.svg'
import svgNodejs from '../assets/node-js-svgrepo-com.svg'

function Templates() {
    return (
      <div className='templates'>
        <div className='selectors'>
          <select name="" id="">
            <option value="">aaaaaaa</option>
          </select>
          <select name="" id="">
            <option value="">aaaaaaa</option>
          </select>
          <select name="" id="">
            <option value="">aaaaaaa</option>
          </select>
          <select name="" id="">
            <option value="">aaaaaaa</option>
          </select>
        </div>
        <div className="webTemplate">
          <article>
            <iframe src="https://blog.nekomath.com/algebra-lineal-i-sistemas-de-ecuaciones-lineales-axb/"  ></iframe>
            <hr />
            <div>
              <span style={{ fontSize: '5vh' }}>Portfolio 2023</span>
              <span>- Portfolio moderno vanguardista de noseque y mas cosas aqui vale chatgpte ya sabes voy a escribir cosas para que parezvca que hay un texto atgpte ya sabes voy a escribir cosas para que parezvca que hay un texto</span>
              <span style={{ fontSize: '2.3vh', fontWeight: '400' }}>Frontend</span>
              <div className='icons-tech'>
                <img src={svgVite} alt="" />
                <img src={svgReact} alt="" />
              </div>
              <span style={{ fontSize: '2.3vh', fontWeight: '400' }}>Backend</span>
              <div className='icons-tech'>
                <img src={svgNodejs} alt="" />
                <img src={svgEth} alt="" />
                <img src={svgBnb} alt="" />
              </div>
              <button>DOWNLOAD FREE</button>
              <span>Do you want a <b>personalized</b> version?</span>
              <div>
                <a href="#">CONTACT</a>
                <span>Desde 12€ <b><i><strike style={{ fontSize: '1.3vh' }}>36€</strike></i></b></span>
              </div>
            </div>
          </article>
          <article>
            <img src={webT} alt="" />
            <div>
              <span style={{ fontSize: '5vh' }}>Portfolio 2023</span>
              <span>- Portfolio moderno vanguardista de noseque y mas cosas aqui vale chatgpte ya sabes voy a escribir cosas para que parezvca que hay un texto atgpte ya sabes voy a escribir cosas para que parezvca que hay un texto</span>
              <span>¿Quieres una version personalida?</span>
              <div>
                <a href="#">CONTACT US</a>
                <span>Desde 36€</span>
              </div>
            </div>
          </article>
          <article>
            <img src={webT} alt="" />
            <div>
              <span style={{ fontSize: '5vh' }}>Portfolio 2023</span>
              <span>- Portfolio moderno vanguardista de noseque y mas cosas aqui vale chatgpte ya sabes voy a escribir cosas para que parezvca que hay un texto atgpte ya sabes voy a escribir cosas para que parezvca que hay un texto</span>
              <span>¿Quieres una version personalida?</span>
              <div>
                <a href="#">CONTACT</a>
              </div>
            </div>
          </article>
          <article>
            <img src={webT} alt="" />
            <div>
              <span style={{ fontSize: '5vh' }}>Portfolio 2023</span>
              <span>- Portfolio moderno vanguardista de noseque y mas cosas aqui vale chatgpte ya sabes voy a escribir cosas para que parezvca que hay un texto atgpte ya sabes voy a escribir cosas para que parezvca que hay un texto</span>
              <span>¿Quieres una version personalida?</span>
              <div>
                <a href="#">CONTACT</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
  
  export default Templates