
import './App.css';
import HelloWorld from './components/HelloWorld'; 
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria";

  return (
    <div className="App">
      <SayMyName name="Lucas" />
      <SayMyName name="Jean" />
      <SayMyName name={nome} />
      <Pessoa nome="João" idade="25" profissao="Programador" foto="https://avatars.githubusercontent.com/u/5624255?v=4/" />
    </div>
  );
}

export default App;

 
