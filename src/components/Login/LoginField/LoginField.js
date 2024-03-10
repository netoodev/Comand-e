import './LoginField.css';
import { NavLink } from "react-router-dom";


const LoginField = () => {

    const link = document.querySelector('.link');

    
    return(
        <>
            <div className="field-bg">
                <div className="container">
                    <header>
                        <nav>
                            <ul>
                                <li><a href="#" id="loginFuncionario" className="link a-left selected">Funcionário</a></li>
                                <li><a href="#" id="loginEmpresa" className="link">Empresa</a></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="form-elements">
                        <h1>Login</h1>
                        <div className="login-inputs">
                            <input type="email" placeholder="Email"></input>
                            <div className="password-input-wrapper">
                                <input type="password" placeholder="Senha"></input>
                                <a id="recuperarSenha" href="#">Esqueceu a senha?</a>
                            </div>
                        </div>
                        <NavLink to="/mesas" className="button" type="submit" id="login">Entrar</NavLink>
                        <a href="#">Não tem uma conta? <span>Cadastre-se</span></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginField;