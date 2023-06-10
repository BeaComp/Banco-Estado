import React from "react";
import './TelaResumo.css';
import icon from '../img/Icon.svg'
import { useState } from 'react';
import TelaMovimentos from "../TelaMovimentos";
import TelaSaldoCorrente from "../TelaSaldo/ContaCorrente";




const TelaResumo = () => {

    return (

        <div className="tela-resumo">
            <div className="resumo">
                <h1>Resumo</h1>
                <div className="contas">
                    <p>Contas</p>
                </div>

                <div className="conta-poupanca">
                    <p className="conta-p">Conta Poupança</p>
                    <div className="componentes">
                        <p>0-018-485-097</p>
                        <p>$ 80.520</p>
                    </div>
                </div>

                <div className="conta-corrente">
                    <p className="conta-p">Conta Corrente</p>
                    <div className="componentes">
                        <p>00-023-03687-09</p>
                        <p>$ 145.470</p>
                    </div>
                </div>
            </div>

            <div className="acesso">
                <h1>Acesso Diretos</h1>

            

                <div className="acesso-itens">
                    <ul>
                        <li>
                            <img src={icon} alt="icon" />
                            <p >Transferir</p>
                        </li>

                        <li>
                            <img src={icon} alt="icon" />
                            <p> Consultar Saldo</p>
                        </li>

                        <li>
                            <img src={icon} alt="icon" />
                            <p>Movimentos</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default TelaResumo;