import { useState } from 'react';

import CalcButton from './components/CalcButton.jsx';
import CalcList from './components/CalcList.jsx';

function App() {

  // Array de strings com entradas do usuário, e base para às operações.
  const [panelValue, setPanelValue] = useState('0');

  // Vetor que guarda o total para mostrar no painel, e servir como o valor antecessor para operações.
  const [total, setTotal] = useState([0]);

  // Contador para rodagem dos vetores
  const [counter, setCounter] = useState(0);

  // Usado como uma "memória". soma[1], subtração[2], multiplicação[3], divisão[4].
  const [controller, setController] = useState(0);

  // Função que pega à entrada do usuário como argumento, e à exibe no painel. E caso o valor seja umas das operações
  // ele irá alternar o controller para à chamada do handleOperation().
  function operation(number) {

    //Ternário para evitar que a primeira entrada fique como (01) e sim (1) atribuindo o número, ao invés de somar à string.
    const newPanelValue = panelValue === '0' ? number.toString() : panelValue + number.toString(); 
    setPanelValue(newPanelValue);

    // Cria um vetor com base nos espaços deixados quando o usuário usa um operador[ex: ' + '].
    const calcValues = newPanelValue.split(' ');

    // Inicialização de váriáveis com base no valor dos hooks.
    let newTotal = total;
    let newController = controller;
    let newCounter = counter;
    
    // Switch case que espera por um operador para então mudar o controller correspondente. E incrementa o counter por 2
    switch (calcValues[counter + 1]) {
      case '+': 
        newController = 1;
        setCounter(counter + 2);
        break;

      case '-':
        newController = 2;
        setCounter(counter + 2);
        break;

      case 'x':
        newController = 3;
        setCounter(counter + 2);
        break;

      case '÷':
        newController = 4;
        setCounter(counter + 2);

        break;

      case '=':
        newTotal = handleOperation(newController, newTotal, calcValues);
        calcValues[counter + 2] = newTotal[counter];
        addToList(calcValues);

      case 'c':
        setPanelValue('0');
        setController(0);
        setTotal([0]);
        setCounter(0);
        return
        break;

      default:
        newTotal = handleOperation(newController, newTotal, calcValues);
        break;

    }
    setTotal(newTotal);
    setController(newController);

  }

  // Aqui é onde com base no controller, uma operação corresponte é feita com os valores no array calc values e newTotal.
  function handleOperation(newController, newTotal, calcValues) {
    let calc1 = 0; 
    let calc2 = 0;

    // Usando o total antigo, conforme o usuário digita, a operação segue esta lógica: [2 + 20 = 22].
    // Do contrário seria: [2 + 20 = 24]. Porque ele iria fazer [2 + 2] antes de fazer [2 + 20].
    // ex. total = 0; total = n1 + n2;  array: [n1 = 1, '+', n2 = 2]. Resultado: total = 3.
    // caso o usuário digitasse mais um número.
    // total = 3; total = n1 + n2; array: [n1 = 1, '+', n2 = 20]. Resultado: total = 23.
    switch(newController) {

      case 1:
        calc1 = parseInt(newTotal[counter - 2]);
        calc2 = parseInt(calcValues[counter]);
        newTotal[counter] = calc1 + calc2;
        break;

      case 2:
        calc1 = parseInt(newTotal[counter - 2]);
        calc2 = parseInt(calcValues[counter]);
        newTotal[counter] = calc1 - calc2;
        break;

      case 3:
        calc1 = parseInt(newTotal[counter - 2]);
        calc2 = parseInt(calcValues[counter]);
        newTotal[counter] = calc1 * calc2;
        break;

      case 4:
        calc1 = parseInt(newTotal[counter - 2]);
        calc2 = parseInt(calcValues[counter]);
        newTotal[counter] = calc1 / calc2;
        break;

      default:
        newTotal[counter] = parseInt(calcValues[counter]); 
        break;
    }
    return newTotal;
  }

  function addToList() {

  }
  
  return (
    <div className="container-fluid">
      <header>
        <h1 className="display-1">Caluladorinha <small>3000</small></h1>
      </header>
      
      <main className="container" id="calc-container">
        <h2>{panelValue}</h2>
        <h2>
          <small>
            {typeof total[counter] === 'undefined' ? total[counter -2] : total[counter]}
          </small>
        </h2>
             
        <CalcButton onClick={operation} />

        <CalcList addToList={addToList}/>
        
      </main>
    </div>
  );
}

export default App
