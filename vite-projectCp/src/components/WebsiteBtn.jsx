/* eslint-disable react/prop-types */
import Web1Img from '../assets/web1.png'
import './styles/WebsiteBtn.css'

function WebsiteBtn({ data }) {

  return (
    <div>
        <div className='topwebbtn'>
            <span>{data.name}</span>
            <span>Aqui informacion a la derecha</span>
        </div>
        <div className='WebsiteBtn'>
          <iframe src="https://blog.nekomath.com/algebra-lineal-i-sistemas-de-ecuaciones-lineales-axb/"  ></iframe>
        </div>
    </div>
  );
}

export default WebsiteBtn;