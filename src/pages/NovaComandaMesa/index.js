import './NovaComandaMesa.css';
import Voltar from '../../components/NovaComanda/Voltar/Voltar';

const NovaComandaMesa = () => {

    return(
        <>
            <Voltar/>
            <div className='page-heading'>
                <div className='page-title'>
                    <h1>Nova Comanda</h1>
                </div>
                <div className='table-id'>
                    <p>Mesa: 1</p>
                </div>
            </div>
        </>
    );
}

export default NovaComandaMesa;