import './entradaFuncionario.css';
import Botaoencerrar from './img/Botao-encerrar.svg';
import bancoestado from './img/bancoestado-logo.svg';
import Chevron from './img/Chevron.svg';
import buttonHome from './img/button-home.svg';
import React from 'react';
import { useState } from 'react';
import TelaBuscarFuncionario from '../TelaBuscarFuncionario';
import TelaContatoFuncionario from '../TelaContatoFuncionario';
import TelaTransferenciasAltasFuncionario from '../TelaTransferenciasAltaFuncionario';
import TelaEmprestimosAltosFuncionario from '../TelaEmprestimosAltos';

function AbrirOpcoes1() {
    var ChevronContas = document.querySelector('.EntradaCliente-container-opcoes-2-1');
    var Color = document.querySelector('.EntradaCliente-container-opcoes-2-1-color');
    var Chevronimg = document.querySelector('#BtnChevronContas');
    var Text = document.querySelector('.EntradaCliente-container-opcoes-1 p')
    if (ChevronContas.style.display === 'block') {
        ChevronContas.style.display = 'none';;
        Chevronimg.style.rotate = '0deg';
        Color.style.backgroundColor = 'rgb(248 245 241)';
        Text.style.color = '#3E3E3E';
        Text.style.fontWeight = 'inherit';
    }
    else {
        ChevronContas.style.display = 'block';
        Chevronimg.style.rotate = '180deg';
        Color.style.backgroundColor = '#FF9E33';
        Text.style.color = '#FFFFFF';
        Text.style.fontWeight = 'bold';
    }
};

function AbrirOpcoesPendencias() {
    var ChevronContas = document.querySelector('.EntradaCliente-container-opcoes-2-2-1');
    var Chevronimg = document.querySelector('#BtnChevrontransferencia');
    var color = document.querySelector('.EntradaCliente-container-opcoes-1-color');
    var texto3 = document.querySelector('.EntradaCliente-container-opcoes-1-color p')
    if (ChevronContas.style.display === 'block') {
        ChevronContas.style.display = 'none';;
        Chevronimg.style.rotate = '0deg';
        color.style.backgroundColor = 'rgb(248 245 241)';
        texto3.style.color = '#3E3E3E';
        texto3.style.fontWeight = 'inherit';
    }
    else {
        ChevronContas.style.display = 'block';
        Chevronimg.style.rotate = '180deg';
        color.style.backgroundColor = '#FF9E33';
        texto3.style.color = '#FFFFFF';
        texto3.style.fontWeight = 'bold';
    }
}


function EntradaFuncionario() {
    const [telaAtual, setTelaAtual] = useState('tela1');

    // Função para alternar entre as telas
    const alternarTela = (tela) => {
        setTelaAtual(tela);

        var cor = document.querySelector('.EntradaCliente-container-opcoes-contatos')
        var textocor = document.querySelector('.EntradaCliente-container-opcoes-contatos p')
       
        if (tela === 'tela1') {
            cor.style.backgroundColor = 'inherit';
            textocor.style.fontWeight = 'inherit';
            textocor.style.color = '#3E3E3E';
           
           
        }
        else if (tela === 'tela4') {
            cor.style.backgroundColor = 'inherit';
            textocor.style.fontWeight = 'inherit';
            textocor.style.color = '#3E3E3E';
            
        }
        else if (tela == 'tela3'){
            cor.style.backgroundColor = 'inherit';
            textocor.style.fontWeight = 'inherit';
            textocor.style.color = '#3E3E3E';
            
        }
        else if (tela == 'tela2') {
            cor.style.backgroundColor = '#FF9E33';
            textocor.style.fontWeight = 'bold';
            textocor.style.color = '#FFFFFF';
           
        }
        else {
            cor.style.backgroundColor = 'inherit';
            textocor.style.fontWeight = 'inherit';
            textocor.style.color = '#3E3E3E';
           
        }
    };

    // Função para alternar entre as telas
    // const alternarTela = (tela) => {
    //     setTelaAtual(tela)
    // }

    return (
        <div className="EntradaCliente">
            <header className="EntradaCliente-header" >
                <div>
                    <div>
                        <div className='EntradaCliente-container-header'>
                            <img src={Botaoencerrar} alt="Botão encerrar" />
                            <p>Encerrar sessão</p>
                        </div>
                    </div>
                </div>
            </header>


            <div className='EntradaCliente-container-principal-topo'>
                <img className='EntradaCliente-bancoEstado' src={bancoestado} alt="Logo Banco" />
                <img onClick={() => alternarTela('tela1')} src={buttonHome} alt="Home" className='buttonHome' />
                {/* onClick={() => alternarTela('tela1')}  colocar a funcao do buttonHome*/}
            </div>


            {/*Container lateral começa aqui*/}
            <div className='EntradaCliente-container-principal-central'>

                <div className='EntradaCliente-container-principal-lateral'>

                    {/*Opções de Conta*/}
                    <div className='EntradaCliente-container-opcoes-1 EntradaCliente-container-opcoes-2-1-color' >

                        <p onClick={AbrirOpcoes1}>Contas</p>
                        <img id='BtnChevronContas' src={Chevron} alt="Chevron" onClick={AbrirOpcoes1} />
                    </div>


                    {/*Opções de Conta corrente*/}
                    <div className='EntradaCliente-container-opcoes-2-1' >
                        <div className='EntradaCliente-container-opcoes-2'>
                            <p onClick={() => alternarTela('tela1')} >Buscar</p>
                            {/* colocar a tela de buscar */}
                        </div>
                    </div>

                    <div className='EntradaCliente-container-opcoes-Pendencias EntradaCliente-container-opcoes-1 EntradaCliente-container-opcoes-1-color'>
                        <p onClick={AbrirOpcoesPendencias} >Pendências</p>
                        {/* onClick={() => alternarTela('tela7')} colocar a tela de Pendencias */}
                        <img id='BtnChevrontransferencia' src={Chevron} alt="Chevron" onClick={AbrirOpcoesPendencias} />
                    </div>
                    {/*Opções de Pendencias*/}
                    <div className='EntradaCliente-container-opcoes-2-2-1'>
                        <div className='EntradaCliente-container-opcoes-2-1-Pendencias'>
                            <p onClick={() => alternarTela('tela3')} >Transferências Altas</p>
                        </div>

                        <div className='EntradaCliente-container-opcoes-2-1-Pendencias'>
                            <p onClick={() => alternarTela('tela4')}>Empréstimos</p>
                        </div>

                    </div>
                    <div className='EntradaCliente-container-opcoes-contatos'>
                        <p onClick={() => alternarTela('tela2')} className='EntradaCliente-container-opcoes-contatos p'>Contatos</p>
                        {/* onClick={() => alternarTela('tela7')} colocar a tela de contatosFUncionario */}
                    </div>
                </div>

                <div className='tela-buscar'>
                    {telaAtual === 'tela1' && <TelaBuscarFuncionario />}
                    {telaAtual === 'tela2' && <TelaContatoFuncionario />}
                    {telaAtual === 'tela3' && <TelaTransferenciasAltasFuncionario />}
                    {telaAtual === 'tela4' && <TelaEmprestimosAltosFuncionario />}

                </div>
                {/* 
                <div className='telaresumo'>
                    {telaAtual === 'tela1' && <TelaResumo />}
                    {telaAtual === 'tela2' && <TelaMovimentos />}
                    {telaAtual === 'tela3' && <TelaSaldoPoupanca />}
                    {telaAtual === 'tela4' && <TelaSaldoCorrente />}
                    {telaAtual === 'tela5' && <TelaContatos />}
                    {telaAtual === 'tela6' && <TelaTransferir />}
                    {telaAtual === 'tela7' && <TelaEmprestimo />}
                </div> */}
            </div>
        </div>

    );
};

export default EntradaFuncionario;