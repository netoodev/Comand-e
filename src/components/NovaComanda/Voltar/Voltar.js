import './Voltar.css';
import SetaVoltar from '../../../assets/NovaComanda/seta-voltar.svg'

const Voltar = () => {
    return(
        <>
            <div className='voltar-container'>
                <img src={SetaVoltar}></img>
            </div>
        </>
        
    );
}

export default Voltar;