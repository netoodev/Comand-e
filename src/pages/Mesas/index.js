import './mesas.css';

import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import MesaCard from "../../components/Mesas/Cards/MesaCard";

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
                </div>
            </div>
        </>
    );
}

export default Mesas;