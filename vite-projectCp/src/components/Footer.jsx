import './styles/Footer.css'

function Footer() {

  return (
    <footer>
        <div>
          <h3>COMPONT</h3>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className='footerText'>
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Downloads</p>
          <p>Locate A Dealer</p>
          <p>Product Registration</p>
          <p>Spare Parts</p>
        </div>
        <div className='footerText'>
          <h4>Furrion</h4>
          <p>About Furrion</p>
          <p>Furrion Design</p>
          <p>Careers</p>
          <p>Newsroom</p>
          <p>Furrion Access</p>
        </div>
        <div className='footerInput'>
          <p>* Stay up to date on the latest from Furrion</p>
          <form action="">
            <input className='formText' type="text" placeholder='componentes@componentes.com'/>
            <input className='formSubmit' type="submit" />
          </form>
        </div>
    </footer>
  );
}

export default Footer;
