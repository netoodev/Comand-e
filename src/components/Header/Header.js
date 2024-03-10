import './Header.css';
import { NavLink } from 'react-router-dom';
import profileDownIcon from '../../assets/header/profile-down-icon.svg';
import settingsIcon from '../../assets/header/settings-icon.svg';

const Header = () => {
    return(
        <>
            <div className='header-container'>
                <NavLink className='profile-link'>
                    <div className='profile-img'><p>A</p></div>
                    <div className='profile-username'>
                        <p>Abner</p>
                        <img src={profileDownIcon} alt='abaixo'></img>
                    </div>
                </NavLink>
                <NavLink className="settings-link">
                    <img src={settingsIcon}></img>
                </NavLink>
            </div>
        </>
    );
}

export default Header;