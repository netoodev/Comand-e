import './pedidos.css';
import Voltar from '../../components/NovaComanda/Voltar/Voltar';
import Pesquisa from '../../components/Pesquisa/Pesquisa';

const Pedidos = () => {
    return(
        <>
            <Voltar></Voltar>
            <div className='page-heading'>
                <div className='page-title'>
                    <h1>Pedidos</h1>
                </div>
            </div>
            <Pesquisa/>
            
        </>
    );
}

export default Pedidos;