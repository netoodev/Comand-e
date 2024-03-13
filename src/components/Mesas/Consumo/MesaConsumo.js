import './MesaConsumo.css';
import { NavLink } from 'react-router-dom';

const MesaConsumo = (props) => {
    return(
        <>
            <NavLink className='consumo-card'>
                <div className='mesa-info'>
                    <div className='top-info'>
                        <h4>{props.client}</h4>
                        <h4>{props.table}</h4>
                    </div>
                    <div className='bottom-info'>
                        <h4>{props.hours}h{props.minutes}m</h4>
                        <h4>R$ {props.price}</h4>
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default MesaConsumo;