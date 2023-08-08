import {useState, useEffect} from "react";

function CalcButton(props) {

	const [result, setResult] = useState(0);
	const [values, setValues] = useState('');

	const clear = '';

	let sum = 0;
	// Dicionário para definir os valores dos botões que serão iterados depois
	const BUTTON_VALUES = [
		{ label: '1', value: 1 },
		{ label: '2', value: 2 },
		{ label: '3', value: 3 },
		{ label: '4', value: 4 },
	 	{ label: '5', value: 5 },
		{ label: '6', value: 6 },
		{ label: '7', value: 7 },
		{ label: '8', value: 8 },
		{ label: '9', value: 9 },
		{ label: '0', value: 0 },

		{ label: '+', value: ' + ' },
		{ label: '=', value: ' = ' }
	];

	function calc(operation) {

		switch (operation) {
		case (' + '):
			sum + parseInt(values);
			console.log(sum)
			break;

		case (' = '):
			setResult(sum);
			break;

		default:
			
			
			break;
		}
		props.showOnPanel(values + operation);
		props.showResult(result);
		
	}


	// Processo para iterar o vetor buttonValue com o método .map()
	const Buttons = BUTTON_VALUES.map((button) => {
	  	const buttons = (
		  	<button 
		  	key={button.label} 
		  	onClick={() => { calc(button.value) }}
		  	className="btn-lg btn-secondary">
		  		{button.label}
		  	</button>
		  );
	  	return buttons
  	});

  	// Layout que será renderizado //
	return (
		<div>
			{Buttons}
        </div>
	);
}

export default CalcButton