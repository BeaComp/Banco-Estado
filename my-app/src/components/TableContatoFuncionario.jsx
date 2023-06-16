import React from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


const TableContatoFuncionario = () => {

    // constructor (props) {
    //     super(props)

    //     this.state = {
    //         clientes : []
    //     }
    // }


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Nº Conta</th>
                    <th>Tipo de Conta</th>
                    <th>Contato</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Rosângela</th>
                    <th>123456-6</th>
                    <th>Corrente</th>
                    <th>1235-1235-563</th>
                </tr>

            </tbody>
        </Table>
    )
}


export default TableContatoFuncionario;