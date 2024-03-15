import './pedidos.css';
import Voltar from '../../components/NovaComanda/Voltar/Voltar';

const Pedidos = () => {
    return(
        <>
            <Voltar></Voltar>
            <div className='page-heading'>
                <div className='page-title'>
                    <h1>Pedidos</h1>
                </div>
            </div>
        </>
    );
}

export default Pedidos;