import './entradaCliente.css';
import Botaoencerrar from './img/Botao-encerrar.svg';
import bancoestado from './img/bancoestado-logo.svg';
import Chevron from './img/Chevron.svg';


    function AbrirOpcoes1() {
        var ChevronContas = document.querySelector('.EntradaCliente-container-opcoes-2-1');
        var Chevronimg = document.querySelector('#BtnChevronContas');
        if(ChevronContas.style.display === 'block') {
            ChevronContas.style.display = 'none';;
            Chevronimg.style.rotate = '0deg';
        }
        else{
            ChevronContas.style.display = 'block';
            Chevronimg.style.rotate = '180deg';
        }
    };


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
                <img src={bancoestado} alt="Logo Banco" />
            </div>
            <div className='EntradaCliente-container-principal-lateral'>
                <div className='EntradaCliente-container-opcoes-1' id='EntradaCliente-container-opcoes-cor-1'>
                    <p>Contas</p>
                    <img id='BtnChevronContas' src={Chevron} alt="Chevron" onClick={AbrirOpcoes1}/>
                </div>
                    <div className='EntradaCliente-container-opcoes-2-1'>
                        <div className='EntradaCliente-container-opcoes-2'>
                            <p>Conta corrente</p>
                            <img src={Chevron} alt="Chevron" />
                        </div>
                        <div className='EntradaCliente-container-opcoes-2'>
                            <p>Conta poupança</p>
                            <img src={Chevron} alt="Chevron" />
                        </div>
                    </div>
                <div className='EntradaCliente-container-opcoes-1'>
                    <p>Transferências</p>
                    <img src={Chevron} alt="Chevron" />
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