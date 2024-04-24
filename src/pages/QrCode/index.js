import './qrcode.css';
import Voltar from '../../components/NovaComanda/Voltar/Voltar';

const QrCode = () => {
    return(
        <>
            <Voltar backTo="/mesas"></Voltar>
            <div className='page-heading'>
                <div className='page-title'>
                    <h1>QR Code</h1>
                </div>
            </div>
        </>
    );
}

export default QrCode;