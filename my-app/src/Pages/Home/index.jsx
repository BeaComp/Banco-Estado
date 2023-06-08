import './home.css';
import logo from '../img/bancoestado-logo.png'
import entrar from '../img/Frame.svg';
import imagemhome from './Imagens/Imagem-Home.svg';

function home() {
    return (
      <div className="Home">
        <header className='header'></header>
            <div className='container-principal'>
                <div className='Container-superior'>
                <img className='logo' src={logo}/>
                <button id='Entrar' > 
                <img className='home-login' src={entrar} alt="" />
                <p className='entrar'> Entrar </p> </button>
                </div>
            <div className='container-inferior'>
                <div >
                <p >Seu parceiro confiável para uma vida de proteção.</p>
                </div>
                <img className='imagem-home' src={imagemhome} alt="" />
            </div>
        </div>
        <footer className='footer'> © Projeto Banco de Dados 2 - 2023</footer>
      </div>
    );
  }
  export default home;