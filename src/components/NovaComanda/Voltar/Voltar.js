import './Voltar.css';
import SetaVoltar from '../../../assets/NovaComanda/seta-voltar.svg'
import { NavLink } from 'react-router-dom';

const Voltar = (props) => {
    return(
        <>
            <NavLink to={props.backTo} className='voltar-container'>
                <img src={SetaVoltar}></img>
            </NavLink>
        </>
        
    );
}

export default Voltar;