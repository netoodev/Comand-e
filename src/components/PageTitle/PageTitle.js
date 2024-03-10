import './PageTitle.css';
import { NavLink } from 'react-router-dom';

import qrcodeIcon from '../../assets/pageTitle/qrcode-icon.svg'

const PageTitle = () => {
    return(
        <>
            <div className='pagetitle-container'>
                <h1>Mesas</h1>
                <NavLink className='qrcode-link'>
                    <img src={qrcodeIcon}></img>
                    <p>QR Code</p>
                </NavLink>
            </div>
        </>
    );
}

export default PageTitle;