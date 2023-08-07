import { useState } from 'react';

import CalcButton from './components/CalcButton.jsx';

function App() {

  const [valor, setValor] = useState('0');
  const [result, setResult] = useState('0');

  // Mostra o que você apertou no painel, e vai adicionando a frente
  function showOnPanel (buttonValue) {
    if (valor === '0' && valor.length === 1) {

      setValor(buttonValue);
    } else {

      setValor(valor + buttonValue.toString());
      
    }
  }

  function showResult(total) {
    console.log(total);
    setResult(total);
  }
  
  return (
    <div className="container">
      
      <h1>Calculadora</h1>

      <h3>{valor}</h3>
      <h4>{result}</h4>
      
      
      <CalcButton 
      showOnPanel={showOnPanel}
      showResult={showResult}/>

    </div>
  );
}

export default App
