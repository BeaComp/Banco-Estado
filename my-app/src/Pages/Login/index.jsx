import React from "react";
import './login.css';

import logo from '../img/bancoestado-logo.png'
import retangulo from '../img/Rectangle.png'

function Login() {

    return (
        <div className="page-login">
            <div className="quadrado">
                
            </div>
            
            <div className="login">
                <img  className="imgLogo" src={logo} alt="Banco Estado" />
                <p className="login-title">Entre com seus dados:</p>

                <form className="form" autoComplete="none">
                    <div className="form-control">
                        <label htmlFor="numeroConta">Número da Conta:</label>
                        <input id="numberConta" type="text" name="numberConta" autoComplete="none" placeholder="Ex:12345-5" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Senha:</label>
                        <input id="password" type="password" name="password" placeholder="*******" />
                    </div>

                    <button id="btnEntrar">Entrar</button>
                </form>

            </div>

            <div className="quadrado">
                
            </div>
        </div>

    );
};

export default Login;