import './AdicionarMesa.css';
import AdicionarMesaIcon from '../../../assets/AdicionarMesa/add-icon.svg';
import { NavLink } from 'react-router-dom';

const AdicionarMesa = () => {
    return(
        <>
            <NavLink className="add-table-btn">
                <div className='add-table-elements'>
                    <img src={AdicionarMesaIcon} alt=''></img>
                    <h3>Adicionar Mesa</h3>
                </div>
            </NavLink>
        </>
    );
}

export default AdicionarMesa;