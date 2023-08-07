import {useState, useEffect} from "React";

function CalcButton(props) {


	// Dicionário para definir os valores dos botões que serão iterados depois
	const buttonValues = [
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
		{ label: '+', value: ' + ' }
	];

	function calc(operation) {
		
	}

	// Processo para iterar o vetor buttonValue com o método .map()
	const Buttons = buttonValues.map((button) => {
	  	const buttons = (
		  	<button 
		  	key={button.label} 
		  	onClick={() => { calc(button.value); props.showOnPanel(button.value); }}
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