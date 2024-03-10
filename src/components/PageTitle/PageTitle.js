import './PageTitle.css';
import { NavLink } from 'react-router-dom';

import qrcodeIcon from '../../assets/pageTitle/qrcode-icon.svg'

const PageTitle = (props) => {
    return(
        <>
            <div className='pagetitle-container'>
                <h1>{props.title}</h1>
                <NavLink className='qrcode-link'>
                    <img src={qrcodeIcon} alt='Ícone Leitor Qr code'></img>
                    <p>QR Code</p>
                </NavLink>
            </div>
        </>
    );
}

export default PageTitle;