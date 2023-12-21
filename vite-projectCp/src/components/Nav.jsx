import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import metamask from '../assets/metamask.png'

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

import './styles/Nav.css'

function Nav() {

    const { user, isAuthenticated } = useAuth0();
    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState('');
    const [access, setAccess] = useState('');
    const [address, setAddress] = useState("");

    useEffect(() => {
      setCurrentUrl(location.pathname);
    }, [location]);

    useEffect(() => {
        if(user != undefined) setAccess(user.sub);
    }, [user]);

    async function connectMetamask(){
      let signer = null;
  
      let provider;
      if (window.ethereum == null) {
          console.log("MetaMask not installed; using read-only defaults")
          provider = ethers.getDefaultProvider()
      
      } else {
          provider = new ethers.BrowserProvider(window.ethereum)
          signer = await provider.getSigner();
  
          setAddress(signer.address)
      }
    }
  

  return (
    <nav>
        <NavLink to='/' style={{ borderTop: 'solid .5vh transparent', borderLeft: 'none' }}>
            <svg fill="#873ef0" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g> <circle cx="128.5" cy="139.5" r="18.5"></circle> <path d="M89.269 69.823l39.943-23.625 38.081 23.376.243 44.513-18.906 12.071s-11.12-10.516-21.235-10.518c-10.117-.002-19.2 10.51-19.2 10.51l-17.83-12.01-1.096-44.317zm4.64 40.261l32.733-19.52-.34-38.05L92.692 72.5l1.217 37.585zm1.83 4.806c1.828 0 12 6.919 12 6.919s9.188-10.227 20.027-9.894c10.838.333 21.319 10.165 21.319 10.165l14.32-8.436-34.5-18.498S93.911 114.89 95.74 114.89zm-8.066 94.924l-40.431-22.78 1.203-44.667L87.873 118.9l18.907 11.338s-3.414 14.388 1.642 23.15c5.057 8.762 18.569 11.871 18.569 11.871l-.486 21.446-38.832 23.109zm32.547-24.15l-33.272-18.586-32.781 19.318 34.112 19.115 31.94-19.846zm3.247-3.987c-.915-1.583-.008-13.852-.008-13.852s-13.317-3.344-18.448-12.897c-5.13-9.552-1.99-23.045-1.99-23.045l-14.467-8.184 1.231 39.127s34.596 20.434 33.682 18.85zm84.415-40.856l.488 46.404-39.284 21.292-38.671-22.046-1-21.41s13.532-2.87 18.592-11.63c5.06-8.76 2.631-23.383 2.631-23.383l18.316-10.436 38.928 21.209zm-37.187-16.112l.54 38.108 33.12 18.73-.502-39.099-33.158-17.739zm-4.077.183l-11.992 6.932s2.129 14.571-3.579 23.79c-5.708 9.22-17.329 11.881-17.329 11.881l.146 14.62 32.27-19.63.484-37.593z"></path> </g> </g></svg>
        </NavLink>
        <NavLink to='/components' className={currentUrl == '/components' || currentUrl == '/' ? "selected" : ""}>
            <span>COMPONENTS</span>
        </NavLink>
        <NavLink to='/templates' className={currentUrl == '/templates' ? "selected" : ""}>
            <span>TEMPLATES</span>
        </NavLink>
        <NavLink to='/websites' className={currentUrl == '/websites' ? "selected" : ""}>
            <span>WEBSITES</span>
        </NavLink>
        <NavLink to='/services' className={currentUrl == '/services' ? "selected" : ""}>
            <span>SERVICES</span>
        </NavLink> 
        <NavLink to='/site-builder' className={currentUrl == '/site-builder' ? "selected" : ""}>
            <span>BUILDER</span>
        </NavLink> 
        { access == 'github|57547835' && 
        <NavLink to='/admin' className={currentUrl == '/admin' ? "selected" : ""}>
            <span>ADMIN</span> 
        </NavLink> }

        <button onClick={() => connectMetamask()}>{address == "" ? "Connect wallet" : address.substring(0, 10)+"..."}</button>
        <img src={metamask} alt="" />
        <div>
            {isAuthenticated &&
                <>
                    <LogoutButton></LogoutButton>
                    <NavLink to={'/profile/'+user.sub}>
                        <img src={user.picture} alt="" />
                    </NavLink> 
                </>
            }
            {!isAuthenticated &&
                <LoginButton></LoginButton>
            }
        </div>
    </nav>
  );
}

export default Nav;

