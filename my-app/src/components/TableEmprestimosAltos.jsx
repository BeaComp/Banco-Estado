import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const TableEmprestimossAltas = ({ data }) => {
    const [expandedRows, setExpandedRows] = useState([]);

    const handleRowClick = (rowId) => {
        const isRowExpanded = expandedRows.includes(rowId);

        if (isRowExpanded) {
            setExpandedRows(expandedRows.filter(id => id !== rowId));
        } else {
            setExpandedRows([...expandedRows, rowId]);
        }
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Nº Conta</th>
                    <th>Tipo de Conta</th>
                    <th>Pendências</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <React.Fragment key={row.id}>
                        <tr>
                            <td>{row.coluna1}</td>
                            <td>{row.coluna2}</td>
                            <td>{row.coluna3}</td>
                            <td>{row.coluna4}</td>
                            <td>
                                <button onClick={() => handleRowClick(row.id)}>
                                    {expandedRows.includes(row.id) ? '-' : '+'}
                                </button>
                            </td>
                        </tr>
                        {expandedRows.includes(row.id) && (

                            <div className="dados">
                                <div className="dados-1">
                                    <span>
                                        Solicitante
                                    </span>

                                    <span className="span-destinatario">
                                        Carolina Roger
                                    </span>
                                </div>

                                <div className="dados-2">
                                    <span>
                                        Descrição
                                    </span>

                                    <span className="span-destinatario">
                                        Compra de Carro
                                    </span>

                                </div>

                                <div className="dados-3">

                                    <span>
                                        Valor
                                    </span>

                                    <span className="span-destinatario">
                                        $ 1500.000
                                    </span>

                                </div>

                                <div className='botoes'>
                                    <button className='btnAprovar'>Aprovar</button>
                                    <button className='btnRejeitar'>Rejeitar</button>
                                </div>
                            </div>



                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    );
};

export default  TableEmprestimossAltas;
