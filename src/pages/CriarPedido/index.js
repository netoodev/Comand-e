import './pedidos.css';
import Voltar from '../../components/NovaComanda/Voltar/Voltar';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import ScrollPedidos from '../../components/ScrollPedidos/ScrollPedidos';

const Pedidos = () => {
    return(
        <>
            <Voltar backTo="/nova-comanda-mesa"></Voltar>
            <div className='page-heading'>
                <div className='page-title'>
                    <h1>Pedidos</h1>
                </div>
            </div>
            <Pesquisa/>
            <ScrollPedidos/>
        </>
    );
}

export default Pedidos;