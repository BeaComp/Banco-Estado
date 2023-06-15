import React from "react";
import './TelaContatoFuncionario.css';
import iconBuscar from '../img/icon-buscar.svg'
import TableContatoFuncionario from "../../components/TableContatoFuncionario";

function TelaContatoFuncionario() {

    return (
        <div className="tela-buscar-funcionario">

            <h1>Contatos</h1>

            <div className="buscar">
                <div className="btnBuscar">
                    <input
                        id="buscar"
                        type="text"
                        name="buscar"
                        placeholder="Buscar"

                    />
                    <button id="btnBuscar"><img src={iconBuscar} alt="Botao Buscar" /></button>
                </div>
            </div>

            <div className="table">
                <TableContatoFuncionario />
            </div>
        </div>
    )
};

export default TelaContatoFuncionario;