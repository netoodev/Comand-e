import './LoginField.css';

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
                </div>
            </div>
        </>
    );
}

export default LoginField;