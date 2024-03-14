import './MesaDisponivel.css';
import { NavLink } from 'react-router-dom';

const MesaDisponivel = (props) => {

    return(
        <>
            <NavLink to='/nova-comanda-mesa' className='disponivel-card'>
                <h1>{props.table}</h1>
            </NavLink>
        </>
    );
}

export default MesaDisponivel;