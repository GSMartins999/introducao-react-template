import logo from './../img/logo';
import './App.css';

const clicar = () => {
  alert("Botão foi clicado!");
}

function App() {
  return (
    <body>
        <div className="container">
            <h1>Aprenda React na Labenu!</h1>
            <div>
              <div>
                <img className="Logo" src={logo} alt="logo"/>
              </div>
              <div>
                <a href="https://labenu.com.br">Site da Labenu</a>
              </div>
              <div>
                <button onClick={clicar}> Clique aqui! </button>
              </div>
            </div>
          </div>
    </body>
    
  );
}

export default App;