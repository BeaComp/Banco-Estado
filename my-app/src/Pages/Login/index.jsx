import React, { useState } from "react";
import './login.css';

import logo from '../img/bancoestado-logo.png'

function Login() {

    const [nConta, setNConta] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {nConta, password})
        // Limpar os campos
        setNConta("");
        setPassword("");
    }

    

    return (
        <div className="page-login">
            <div className="quadrado">
            </div>

            <div className="login">
                <img className="imgLogo" src={logo} alt="Banco Estado" />
                <p className="login-title">Entre com seus dados:</p>

                <form className="form" autoComplete="none" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="numeroConta">Número da Conta:</label>
                        <input 
                            id="numberConta" 
                            type="text" 
                            name="numberConta" 
                            autoComplete="none" 
                            placeholder="Ex:12345-5" 
                            value={nConta} 
                            onChange={(e) => setNConta(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Senha:</label>
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            placeholder="*******" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button id="btnEntrar" type="submit">Entrar</button>
                </form>

            </div>

            <div className="quadrado">
            </div>
        </div>

    );
};

export default Login;