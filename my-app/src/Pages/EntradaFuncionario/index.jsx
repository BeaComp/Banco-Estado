import './entradaFuncionario.css';
import Botaoencerrar from './img/Botao-encerrar.svg';
import bancoestado from './img/bancoestado-logo.svg';
import Chevron from './img/Chevron.svg';
import buttonHome from './img/button-home.svg';
import React from 'react';
import TelaResumo from '../TelaResumo';
import TelaMovimentos from '../TelaMovimentos';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import AppBreadcrumbs from '../../components/AppBreadcrumb/AppBreadcrumb';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import TelaSaldoPoupanca from '../TelaSaldo/ContaPoupanca';
import TelaSaldoCorrente from '../TelaSaldo/ContaCorrente';
import TelaContatos from '../TelaContatos';
import TelaTransferir from '../TelaTransferir';
import TelaEmprestimo from '../TelaEmprestimos';
import TelaBuscarFuncionario from '../TelaBuscarFuncionario';

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
    // const alternarTela = (tela) => {
    //     setTelaAtual(tela);

    //     var texto = document.querySelector('.EntradaCliente-container-opcoes-2-1-corrente-saldo p')
    //     var texto2 = document.querySelector('.EntradaCliente-container-opcoes-2-1-corrente-movimentos p')
    //     var texto3 = document.querySelector('.EntradaCliente-container-opcoes-2-1-poupanca-saldo p')
    //     var cor = document.querySelector('.EntradaCliente-container-opcoes-contatos')
    //     var textocor = document.querySelector('.EntradaCliente-container-opcoes-contatos p')
    //     var textocor2 = document.querySelector('.EntradaCliente-container-opcoes-Pendencias p')
    //     var cor2 = document.querySelector('.EntradaCliente-container-opcoes-Pendencias')
    //     if (tela === 'tela4') {
    //         texto.style.fontWeight = 'bold';
    //         texto2.style.fontWeight = 'inherit';
    //         texto3.style.fontWeight = 'inherit';
    //         cor.style.backgroundColor = 'inherit';
    //         textocor.style.fontWeight = 'inherit';
    //         textocor.style.color = '#3E3E3E';
    //         cor2.style.backgroundColor = 'rgb(248 245 241)';
    //         textocor2.style.fontWeight = 'inherit';
    //         textocor2.style.color = '#3E3E3E';
    //     }
    //     else if (tela === 'tela2') {
    //         texto2.style.fontWeight = 'bold';
    //         texto.style.fontWeight = 'inherit';
    //         texto3.style.fontWeight = 'inherit';
    //         cor.style.backgroundColor = 'inherit';
    //         textocor.style.fontWeight = 'inherit';
    //         textocor.style.color = '#3E3E3E';
    //         cor2.style.backgroundColor = 'rgb(248 245 241)';
    //         textocor2.style.fontWeight = 'inherit';
    //         textocor2.style.color = '#3E3E3E';
    //     }
    //     else if (tela == 'tela3'){
    //         texto3.style.fontWeight = 'bold';
    //         texto.style.fontWeight = 'inherit';
    //         texto2.style.fontWeight = 'inherit';
    //         cor.style.backgroundColor = 'inherit';
    //         textocor.style.fontWeight = 'inherit';
    //         textocor.style.color = '#3E3E3E';
    //         cor2.style.backgroundColor = 'rgb(248 245 241)';
    //         textocor2.style.fontWeight = 'inherit';
    //         textocor2.style.color = '#3E3E3E';
    //     }
    //     else if (tela == 'tela5') {
    //         cor.style.backgroundColor = '#FF9E33';
    //         textocor.style.fontWeight = 'bold';
    //         textocor.style.color = '#FFFFFF';
    //         texto.style.fontWeight = 'inherit';
    //         texto2.style.fontWeight = 'inherit';
    //         texto3.style.fontWeight = 'inherit';
    //         cor2.style.backgroundColor = 'rgb(248 245 241)';
    //         textocor2.style.fontWeight = 'inherit';
    //         textocor2.style.color = '#3E3E3E';
    //     }
    //     else if (tela == 'tela7'){
    //         cor2.style.backgroundColor = '#FF9E33';
    //         textocor2.style.fontWeight = 'bold';
    //         textocor2.style.color = '#FFFFFF';
    //         texto.style.fontWeight = 'inherit';
    //         texto2.style.fontWeight = 'inherit';
    //         texto3.style.fontWeight = 'inherit';
    //         cor.style.backgroundColor = 'inherit';
    //         textocor.style.fontWeight = 'inherit';
    //         textocor.style.color = '#3E3E3E';
    //     }
    //     else {
    //         texto.style.fontWeight = 'inherit';
    //         texto2.style.fontWeight = 'inherit';
    //         texto3.style.fontWeight = 'inherit';
    //         cor.style.backgroundColor = 'inherit';
    //         textocor.style.fontWeight = 'inherit';
    //         textocor.style.color = '#3E3E3E';
    //         cor2.style.backgroundColor = 'rgb(248 245 241)';
    //         textocor2.style.fontWeight = 'inherit';
    //         textocor2.style.color = '#3E3E3E';
    //     }
    // };

    // Função para alternar entre as telas
    const alternarTela = (tela) => {
        setTelaAtual(tela)
    }

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
                <img src={buttonHome} alt="Home" className='buttonHome' />
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
                            <p>Buscar</p>
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
                            <p>Transferências Altas</p>
                        </div>

                        <div className='EntradaCliente-container-opcoes-2-1-Pendencias'>
                            <p>Empréstimos</p>
                        </div>

                    </div>
                    <div className='EntradaCliente-container-opcoes-contatos'>
                        <p>Contatos</p>
                        {/* onClick={() => alternarTela('tela7')} colocar a tela de contatosFUncionario */}
                    </div>
                </div>

                <div className='telaresumo'>
                    {telaAtual === 'tela1' && <TelaBuscarFuncionario />}

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