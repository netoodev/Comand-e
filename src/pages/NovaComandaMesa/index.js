import './NovaComandaMesa.css';
import { NavLink } from 'react-router-dom';
import Voltar from '../../components/NovaComanda/Voltar/Voltar';
import InputText from '../../components/InputText/InputText';

const NovaComandaMesa = () => {

    return(
        <>
            <Voltar
                backTo='/mesas'
            />
            <div className='page-heading'>
                <div className='page-title'>
                    <h1>Nova Comanda</h1>
                </div>
                <div className='table-id'>
                    <p>Mesa: 1</p>
                </div>
            </div>
            <form action="">
                <InputText
                    title="Nome"
                    type="text"
                    placeholder="Digite o nome do cliente"
                />
                <InputText
                    title="Comanda"
                    type="number"
                    placeholder="Digite o número da comanda"
                />
                <InputText
                    title="Qntd. de pessoas"
                    type="number"
                    placeholder="Digite a quantidade de pessoas"
                />
                <NavLink to='/criar-pedido' className="button">Próximo</NavLink>
            </form>
        </>
    );
}

export default NovaComandaMesa;