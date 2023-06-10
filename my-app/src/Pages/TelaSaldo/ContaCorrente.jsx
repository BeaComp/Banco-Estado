import React from "react";
import './Saldo.css';

const TelaSaldoCorrente = () => {
    return (
        <div className="tela-saldo">
            <h1>Saldo</h1>

            <div className="conta-corrente">
                <p className="conta-p">Conta Corrente</p>
                <div className="componentes">
                    <p>00-023-03687-09</p>
                    <p>$ 145.470</p>
                </div>
            </div>
        </div>
    )
}

export default TelaSaldoCorrente;