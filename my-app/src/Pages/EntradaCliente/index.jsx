import './entradaCliente.css';
import Botaoencerrar from './img/Botao-encerrar.svg';
import bancoestado from './img/bancoestado-logo.svg';
import Chevron from './img/Chevron.svg';
import buttonHome from './img/button-home.svg';

    function AbrirOpcoes1() {
        var ChevronContas = document.querySelector('.EntradaCliente-container-opcoes-2-1');
        var Color = document.querySelector('.EntradaCliente-container-opcoes-2-1-color');
        var Chevronimg = document.querySelector('#BtnChevronContas');
        var Text = document.querySelector('.EntradaCliente-container-opcoes-1 p')
        if(ChevronContas.style.display === 'block') {
            ChevronContas.style.display = 'none';;
            Chevronimg.style.rotate = '0deg';
            Color.style.backgroundColor = 'rgb(248 245 241)';
            Text.style.color = '#3E3E3E';
            Text.style.fontWeight = 'inherit';
        }
        else{
            ChevronContas.style.display = 'block';
            Chevronimg.style.rotate = '180deg';
            Color.style.backgroundColor = '#FF9E33';
            Text.style.color = '#FFFFFF';
            Text.style.fontWeight = 'bold';
        }
    };

    function AbrirOpcoesContacorrente() {
        var ChevronContas = document.querySelector('.EntradaCliente-container-opcoes-2-1-1');
        var ChevronContas1 = document.querySelector('.EntradaCliente-container-opcoes-2')
        var Chevronimg = document.querySelector('#BtnChevronCorrente');
        if(ChevronContas.style.display === 'block') {
            ChevronContas.style.display = 'none';;
            Chevronimg.style.rotate = '0deg';
            ChevronContas1.style.fontWeight = 'inherit';
            ChevronContas.style.fontWeight = 'inherit';
            
        }
        else{
            ChevronContas.style.display = 'block';
            Chevronimg.style.rotate = '180deg';
            ChevronContas1.style.fontWeight = 'bold';
            ChevronContas.style.fontWeight = 'bold';
        }
    }

    function AbrirOpcoesContapoupanca() {
        var ChevronContas = document.querySelector('.EntradaCliente-container-opcoes-2-1-2');
        var ChevronContas1 = document.querySelector('#EntradaCliente-container-opcoes-2')
        var Chevronimg = document.querySelector('#BtnChevronPoupanca');
        if(ChevronContas.style.display === 'block') {
            ChevronContas.style.display = 'none';;
            Chevronimg.style.rotate = '0deg';
            ChevronContas.style.fontWeight = 'inherit';
            ChevronContas1.style.fontWeight = 'inherit';
        }
        else{
            ChevronContas.style.display = 'block';
            Chevronimg.style.rotate = '180deg';
            ChevronContas.style.fontWeight = 'bold';
            ChevronContas1.style.fontWeight = 'bold';
        }
    }

    function AbrirOpcoestransferencia() {
        var ChevronContas = document.querySelector('.EntradaCliente-container-opcoes-2-2-1');
        var Chevronimg = document.querySelector('#BtnChevrontransferencia');
        var texto = document.querySelector('.EntradaCliente-container-opcoes-2-1-transferencias p');
        var texto2 = document.querySelector('#EntradaCliente-container-opcoes-2-1-transferencias');
        var color = document.querySelector('.EntradaCliente-container-opcoes-1-color');
        var texto3 = document.querySelector('.EntradaCliente-container-opcoes-1-color p')
        if(ChevronContas.style.display === 'block') {
            ChevronContas.style.display = 'none';;
            Chevronimg.style.rotate = '0deg';
            texto.style.fontWeight = 'inherit';
            texto2.style.fontWeight = 'inherit';
            color.style.backgroundColor = 'rgb(248 245 241)';
            texto3.style.color = '#3E3E3E';
            texto3.style.fontWeight = 'inherit';
        }
        else{
            ChevronContas.style.display = 'block';
            Chevronimg.style.rotate = '180deg';
            texto.style.fontWeight = 'bold';
            texto2.style.fontWeight = 'bold';
            color.style.backgroundColor = '#FF9E33';
            texto3.style.color = '#FFFFFF';
            texto3.style.fontWeight = 'bold';
        }
    }

function EntradaCliente() {

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
            </div>
                            {/*Container lateral começa aqui*/}
            <div className='EntradaCliente-container-principal-lateral'>
                                    {/*Opções de Conta*/}
                <div className='EntradaCliente-container-opcoes-1 EntradaCliente-container-opcoes-2-1-color' >
                    <p onClick={AbrirOpcoes1}>Contas</p>
                    <img id='BtnChevronContas' src={Chevron} alt="Chevron" onClick={AbrirOpcoes1} />
                </div>
                                {/*Opções de Conta corrente*/}
                    <div className='EntradaCliente-container-opcoes-2-1' >
                        <div className='EntradaCliente-container-opcoes-2'>
                            <p onClick={AbrirOpcoesContacorrente}>Conta corrente</p>
                            <img id='BtnChevronCorrente' src={Chevron} alt="Chevron" onClick={AbrirOpcoesContacorrente} />
                        </div>
                                {/*Opções de Conta corrente - Saldo - movimentos*/}
                        <div className='EntradaCliente-container-opcoes-2-1-1'>
                            <div className='EntradaCliente-container-opcoes-2-1-corrente'>
                                <p>Saldo</p>
                            </div>
                            
                                    {/*Opções de Conta poupança*/}
                            <div className='EntradaCliente-container-opcoes-2-1-corrente'>
                                <p>Movimentos</p>
                            </div>
                        </div>

                                {/*Opções de Conta poupança*/}
                        <div className='EntradaCliente-container-opcoes-2' id='EntradaCliente-container-opcoes-2'>
                            <p onClick={AbrirOpcoesContapoupanca}>Conta poupança</p>
                            <img id='BtnChevronPoupanca' src={Chevron} alt="Chevron" onClick={AbrirOpcoesContapoupanca}/>
                        </div>

                        <div className='EntradaCliente-container-opcoes-2-1-2'>
                            <div  className='EntradaCliente-container-opcoes-2-1-poupanca'>
                                <p>Saldo</p>
                            </div>
                            
                                    {/*Opções de Conta poupança*/}
                            <div className='EntradaCliente-container-opcoes-2-1-poupanca'>
                                <p>Movimentos</p>
                            </div>
                        </div>

                    </div>
                <div className='EntradaCliente-container-opcoes-1 EntradaCliente-container-opcoes-1-color' >
                    <p onClick={AbrirOpcoestransferencia} >Transferências</p>
                    <img id='BtnChevrontransferencia' src={Chevron} alt="Chevron" onClick={AbrirOpcoestransferencia}/>
                </div>
                                        {/*Opções de Transferencia*/}
                        <div className='EntradaCliente-container-opcoes-2-2-1'>
                            <div className='EntradaCliente-container-opcoes-2-1-transferencias'>
                                <p>Transferir</p>
                            </div>
                            <div className='EntradaCliente-container-opcoes-2-1-transferencias' id='EntradaCliente-container-opcoes-2-1-transferencias'>
                                <p>Resumo Transferências</p>
                            </div>
                        </div>
                <div className='EntradaCliente-container-opcoes'>
                    <p>Empréstimos</p>
                </div>
                <div className='EntradaCliente-container-opcoes'>
                    <p>Contatos</p>
                </div>
            </div>
        </div>

    );
};

export default EntradaCliente;