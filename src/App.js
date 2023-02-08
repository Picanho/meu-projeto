
import './App.css';
import HelloWorld from './components/HelloWorld'; 

function App() {

  function Sum(a, b) {  
    return a + b;
  }

const name = 'Lucas';

const URL = 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png/150';

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Olá, {name}</p>
      <p>Soma: {Sum(1, 2)}</p>
      <img src={URL} alt="lucas"/>
      <HelloWorld />
    </div>
  );
}

export default App;

 