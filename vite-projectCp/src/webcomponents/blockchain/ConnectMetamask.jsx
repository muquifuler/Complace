import { useState } from 'react'
import { ethers } from 'ethers'
import metamask from '../../assets/metamask.png'

import '../styles/ConnectMetamask.css'

function ConnectMetamask() {

    const [address, setAddress] = useState();

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
        <button className='metamaskButton' onClick={() => connectMetamask()}>
            <img src={metamask} alt="metamask" />
            <span>Connect wallet</span>
        </button>
    )
}

export default ConnectMetamask