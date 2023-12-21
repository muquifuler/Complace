import { useState } from 'react'

import '../styles/MultiPay.css'

function MultiPay() {

    const [tx, setTx] = useState([{ address: "0x0", token: "ETH", value: 0.9999 }]);

    return (
        <div className='MultiPay'>
            <p>From:</p>
            <select name="" id="">
                <option value="ETH">ETH</option>
                <option value="BNB">BNB</option>
                <option value="CAKE">CAKE</option>
            </select>
            <p>To:</p>
            {tx.map((e, i) => (
                <div key={i}>
                    <span>@</span>
                    <input type="text" value={e.address}/>
                    <select name="" id="">
                        <option value="ETH">ETH</option>
                        <option value="BNB">BNB</option>
                        <option value="CAKE">CAKE</option>
                    </select>
                    <input type="text" value={e.value}/>
                </div>
            ))}
            <div>
                <button>-</button>
                <button>+</button>
            </div>
            <button>Multipay</button>
        </div>
    )
}

export default MultiPay