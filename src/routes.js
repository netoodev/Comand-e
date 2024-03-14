import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginFuncionario from './pages/LoginFuncionario';
import Mesas from './pages/Mesas';
import NovaComandaMesa from './pages/NovaComandaMesa';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={LoginFuncionario}></Route>
                <Route exact path='/mesas' Component={Mesas}></Route>
                <Route exact path='/nova-comanda-mesa' Component={NovaComandaMesa}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;