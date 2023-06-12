import React from "react";
import './TelaTransferir.css';
import { useState } from 'react';
import TelaComprovante from "../TelaComprovante";


const TelaTransferir = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    }

    const [showParte2, setShowParte2] = useState(false);

    const handleClick = () => {
        setShowParte2(true);
    };

    const handleClickAlterar = () => {
        setShowParte2(false);

    };

    const [exibirComprovante, setExibirComprovante] = useState(false);

    const handleConfirmarClick = () => {
        setExibirComprovante(true);
    };

    const handleVoltarClick = () => {
        setExibirComprovante(false);
        setShowParte2(false);
    };



    const charCount = text.length;
    return (
        <div className="tela-transfere">
            <h1>Transferir</h1>
            <div className="item-1">
                <div className="quadrado1">1</div>
                <div className="title-1">
                    <p>Complete os dados para a transferência</p>
                </div>
            </div>

            <div className="item-2">
                <div className="parte-input">

                    <div className="conta-origem">
                        <label htmlFor="Conta-origem">Conta de Origem</label>
                        <input
                            id="conta-origem"
                            type="text"
                            name="conta-origem"
                            placeholder="Ex. 00-023-03687-07"

                        />
                    </div>

                    <div className="destinatario">
                        <label htmlFor="destinatario">Destinatário</label>
                        <input
                            id="destinatario"
                            type="text"
                            name="destinatario"
                            placeholder="N° Conta"

                        />
                    </div>

                    <div className="valor">
                        <label htmlFor="valor">Valor</label>
                        <input
                            id="valor"
                            type="text"
                            name="valor"
                            placeholder="$"

                        />
                    </div>

                    <div className="descricao">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="inputdesc" class="descricao" placeholder="Escreva sua mensagem" value={text} onChange={handleChange} maxLength={50} />

                        <span id="charCount">{charCount}/50</span>
                    </div>





                </div>

                <div className="detalhes-conta">
                    <p className="detalhes-conta-p">Detalhes da Conta</p>
                    <div className="componentes-detalhes-conta">
                        <p>Saldo disponível</p>
                        <p>$ 80.520</p>
                    </div>
                </div>

            </div>

            <div className="btn-prox">
                <button id="btnProx" onClick={handleClick} >Próximo</button>
            </div>

            {showParte2 && (
                <div className="parte2-confimar">
                    <div className="item-1-confirmar">
                        <div className="quadrado1">2</div>
                        <div className="title-1">
                            <p>Confirme os dados</p>
                        </div>
                    </div>

                    <div className="dados-confirmar">
                        <div className="dados-transferencia">
                            <p className="p-title">Dados da Transferência</p>
                            <p className="p-body">Conta de origem: { } </p>
                        </div>

                        <div className="dados">
                            <div className="dados-1">
                                <span>
                                    Nome Destinatário
                                </span>

                                <span className="span-destinatario">
                                    Carolina Roger
                                </span>

                                <span>
                                    Conta Destinatário
                                </span>

                                <span className="span-destinatario">
                                    12345689-8
                                </span>
                            </div>

                            <div className="dados-2">

                                <span>
                                    Banco
                                </span>

                                <span className="span-destinatario">
                                    Banco Estado
                                </span>

                                <span>
                                    Descrição
                                </span>

                                <span className="span-destinatario">
                                    Supermercado
                                </span>

                            </div>

                            <div className="dados-3">

                                <span>
                                    Valor
                                </span>

                                <span className="span-destinatario">
                                    $ 15.000
                                </span>

                            </div>
                        </div>

                    </div>

                    <div className="botoes-voltar-confirmar">

                        <div className="btn-prox">
                            <button id="btnProx" onClick={handleClickAlterar} >Alterar</button>
                        </div>
                        <div className="btn-prox">
                            <button id="btnProx" onClick={handleConfirmarClick}  >Confirmar</button>
                        </div>


                    </div>






                </div>
            )}

            {exibirComprovante && (
                <div>
                    <button id='btnVoltarTransferir' onClick={handleVoltarClick} className="btnVoltar">Voltar</button>
                    <TelaComprovante />
                </div>
            )}




        </div>


    );
}

export default TelaTransferir;