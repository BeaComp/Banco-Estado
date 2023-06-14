import React from "react";
import './TelaBuscarFuncionario.css';

function TelaBuscarFuncionario() {
   
    return (
        <div className="tela-buscar-funcionario">

            <h1>Buscar</h1>

            <div className="buscar">
                <div>
                    <p>Buscar por:</p>
                </div>

                <div>
                    <div className="bolinha">

                    </div>
                    <p>Cliente</p>

                    <div className="bolinha">

                    </div>
                    <p>Nº da Conta</p>
                </div>
                    
                <div className="inputBuscar">

                </div>
            </div>
            
        </div>
    )
};

export default TelaBuscarFuncionario;