import { useState } from 'react'
import { ethers } from 'ethers'
import metamask from '../../assets/metamask.png'

import '../styles/TransferETH.css'

function TransferETH() {

    const [address, setAddress] = useState("0xC0527FD0C6b743439e06a4d40c9f6E880F871354");

        return(
            <div className='Transfer'>
                <div className='head'>
                    <img src={metamask} alt="metamask" />
                    <span>{address.substring(0, 11)+"..."}</span>
                </div>
                <div className='body'>
                    <input type="text" placeholder='0x7SD87DF78HJ217ASDA8MNSDA78'/>
                    <input type="text" placeholder='0.10'/>
                    <div>
                        <select name="" id="">
                            <option value="ETH">ETH</option>
                            <option value="ETH">BNB</option>
                        </select>
                        <select name="" id="">
                            <option value="ETH">CAKE</option>
                            <option value="ETH">BNB</option>
                        </select>
                    </div>
                    <button>SEND</button>
                </div>

            </div>
        )

}

export default TransferETH