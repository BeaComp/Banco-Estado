import React from "react";
import './Saldo.css';

const TelaSaldoPoupanca = () => {
    return (
        <div className="tela-saldo">
            <h1>Saldo</h1>

            <div className="conta-poupanca">
                <p className="conta-p">Conta Poupança</p>
                <div className="componentes">
                    <p>0-018-485-097</p>
                    <p>$ 80.520</p>
                </div>
            </div>
        </div>
    )
}

export default TelaSaldoPoupanca;