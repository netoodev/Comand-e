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
            <div className='pedidos-container'>
                <div className='legend'>
                    <div className='legend-name'>
                        <div className='legend-color disponivel'></div>
                        <p>Disponível</p>
                    </div>
                    <div className='legend-name'>
                        <div className='legend-color indisponivel'></div>
                        <p>Indisponível</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pedidos;