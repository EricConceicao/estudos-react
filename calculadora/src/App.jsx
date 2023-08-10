import { useState } from 'react';

import CalcButton from './components/CalcButton.jsx';

function App() {

  const [panelValues, setPanelValues] = useState('0');

  function operation(number) {
    if (panelValues === '0') {
      setPanelValues(number.toString());

    } else {
      setPanelValues(panelValues + number);
    }
  }
  
  return (
    <div className="container-fluid">
      <header>
        <h1 className="display-1">Caluladorinha <small>3000</small></h1>
      </header>
      
      <main className="container" id="calc-container">
      
        <h2>{panelValues}</h2>
        <h2><small>92339</small></h2>
             
        <CalcButton onClick={operation} />
     
        
      
        <ul className="list-unstyled">
          <h2>Lista de cálculos</h2>
          <li>a</li>
        </ul>
        
      </main>
    </div>
  );
}

export default App
