import './Voltar.css';
import SetaVoltar from '../../../assets/NovaComanda/seta-voltar.svg'
import { NavLink } from 'react-router-dom';

const Voltar = (props) => {
    return(
        <>
            <div className='voltar-container'>
                <NavLink to={props.backTo}>
                    <img src={SetaVoltar}></img>
                </NavLink>
            </div>
        </>
        
    );
}

export default Voltar;