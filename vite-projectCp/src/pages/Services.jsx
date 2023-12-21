import InitContent from "../components/InitContent"
import actualizar from '../assets/actualizar.png'
import dominio from '../assets/dominio.png'
import hosting from '../assets/hosting.png'
import atencion from '../assets/atencion.png'
import './styles/Services.css'

function Services() {
  return (
    <>
        <InitContent/>
        <div className="services">
            <div>
                <h1>Consigue una web para tu negocio con un click</h1>
                <h2>Vende productos, agenda citas y más, todo a tu alcance</h2>
                <div className="advantages">
                    <img src={dominio} alt="" />
                    <span>Dominio incluido</span>
                </div>
                <div className="advantages">
                    <img src={hosting} alt="" />
                    <span>Hosting incluido</span>
                </div>
                <div className="advantages">
                    <img src={actualizar} alt="" />
                    <span>Actualización y mantenimiento</span>
                </div>
                <div className="advantages">
                    <img src={atencion} alt="" />
                    <span>Soporte en vivo y en español 24/7</span>
                </div>
                <div className="price">
                    <span className="num">2,59</span>
                    <span>€/mes</span>
                </div>
                <h3>+2 meses gratis</h3>
                <div className="timeout">
                    <span className="hhddmmss">00</span>
                    <span>:</span>
                    <span className="hhddmmss">18</span>
                    <span>:</span>
                    <span className="hhddmmss">38</span>
                    <span>:</span>
                    <span className="hhddmmss">46</span>
                </div>
                <button>Obtener oferta</button>
                <div>
                    svg
                    <span>Garantía de devolución del dinero por 30 días</span>
                </div>
            </div>
            <img src="https://www.hostinger.es/h-assets/images/sales/february/homepage-hero-2x.webp" alt="" />
        </div>
    </>
  )
}

export default Services