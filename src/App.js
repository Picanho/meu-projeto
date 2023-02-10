
import './App.css';
import Frase from './components/frase';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Maria";

  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <Frase />
      <SayMyName name="Lucas" />
      <SayMyName name="Jean" />
      <SayMyName name={nome} />
      <Pessoa nome="João" idade="25" profissao="Programador" foto="https://avatars.githubusercontent.com/u/5624255?v=4/" />
     <List />
    </div>
  );
}

export default App;
