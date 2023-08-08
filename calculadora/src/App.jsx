import { useState } from 'react';

import CalcButton from './components/CalcButton.jsx';

function App() {

  const [values, setValues] = useState('0');
  const [result, setResult] = useState(0);

  // Mostra o que você apertou no painel, e vai adicionando a frente
  function showOnPanel (value) {
    if (values === '0' && values.length === 1) {

      setValues(value);
    } else {
 
      setValues(values + value);
    }
    
  }

  function showResult (result) {
    setResult(result);
  }
  
  return (
    <div className="container">
      
      <h1>Calculadora</h1>

      <h3>{values}</h3>
      <h4>{result}</h4>
      
      
      <CalcButton showOnPanel={showOnPanel} showResult={showResult} />

    </div>
  );
}

export default App
