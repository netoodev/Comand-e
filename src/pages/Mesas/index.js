import './mesas.css';

import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import MesaDisponivel from "../../components/Mesas/Disponivel/MesaDisponivel";
import MesaConsumo from '../../components/Mesas/Consumo/MesaConsumo';
import MesaPagamento from '../../components/Mesas/Pagamento/MesaPagamento';
import AdicionarMesa from '../../components/Mesas/AdicionarMesa/AdicionarMesa';

const Mesas = () => {
    return(
        <>
            <Header/>
            <PageTitle title="Mesas"/>
            <div className="mesas-container">
                <div className='legend'>
                    <div className='legend-name'>
                        <div className='legend-color disponivel'></div>
                        <p>Disponível</p>
                    </div>
                    <div className='legend-name'>
                        <div className='legend-color consumo'></div>
                        <p>Em Consumo</p>
                    </div>
                    <div className='legend-name'>
                        <div className='legend-color pagamento'></div>
                        <p>Em pagamento</p>
                    </div>
                </div>
                <div className='mesas-cards'>
                    <MesaDisponivel 
                        table="1"
                    />
                    <MesaConsumo 
                        client="Carla"
                        table="2"
                        hours="0"
                        minutes="13"
                        price="6,50"
                    />
                    <MesaConsumo 
                        client="Fernando"
                        table="3"
                        hours="0"
                        minutes="32"
                        price="25,99"
                    />
                    <MesaPagamento
                        client="Mesa"
                        table="4"
                        hours="1"
                        minutes="06"
                        price="62,45"
                    />
                    <MesaConsumo 
                        client="Mesa"
                        table="5"
                        hours="0"
                        minutes="12"
                        price="18,63"
                    />
                    <MesaDisponivel 
                        table="6"
                    />
                    <MesaDisponivel 
                        table="7"
                    />
                </div>
            </div>
            <AdicionarMesa/>
        </>
    );
}

export default Mesas;