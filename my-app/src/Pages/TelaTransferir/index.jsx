import React from "react";
import './TelaTransferir.css';
import { useState } from 'react';


const TelaTransferir = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    }

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
        </div>
    );
}

export default TelaTransferir;