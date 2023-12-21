import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import TransferETH from '../webcomponents/blockchain/TransferETH';
import ConnectMetamask from '../webcomponents/blockchain/ConnectMetamask';
import ButtonIcon from '../webcomponents/other/ButtonIcon';
import Donate from '../webcomponents/blockchain/Donate';
import Lotery from '../webcomponents/blockchain/Lotery';
import MultiPay from '../webcomponents/blockchain/MultiPay';
import MyNft from '../webcomponents/blockchain/MyNft';
import ButtonTecla from '../webcomponents/other/ButtonTecla';

import './styles/ViewCode.css'

function ViewCode({ component }) {

  return (
    <NavLink className='ViewCode' to={"/components/"+component.id}>
        <div className='top'>
            <span className='tech' style={{ backgroundColor: component.techColor }}>{component.tech.charAt(0).toUpperCase() + component.tech.slice(1)}</span>
            <span>{component.title}</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#22272e"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="download"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#22272e"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#22272e"></polyline> <line fill="none" stroke="#22272e" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g></svg>
        </div>
        <div className='mid'>
            {
              component.title == "Transfer tokens" ? <TransferETH/> :
              component.title == "Connect wallet" ? <ConnectMetamask/> :
              component.title == "Button icon" ? <ButtonIcon/> :
              component.title == "Donate" ? <Donate/> :
              component.title == "Lottery" ? <Lotery/> :
              component.title == "Multipay" ? <MultiPay/> :
              component.title == "View NFT" ? <MyNft/> :
              component.title == "Key" ? <ButtonTecla/> :
              <img src={component.img} alt="" />}
            
        </div>
    </NavLink>
  );
}

ViewCode.propTypes = {
    component: PropTypes.any.isRequired,
};

export default ViewCode;
