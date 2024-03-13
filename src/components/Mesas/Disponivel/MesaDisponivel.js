import './MesaDisponivel.css';
import { NavLink } from 'react-router-dom';

const MesaDisponivel = (props) => {
    return(
        <>
            <NavLink className='disponivel-card'>
                <h1>{props.table}</h1>
            </NavLink>
        </>
    );
}

export default MesaDisponivel;