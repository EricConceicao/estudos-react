import {useState} from "react";

function CalcButton(props) {


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
		{ label: '.', value: '.'}
	];

	const OPERATION_VALUES = [
		{ label: '+', value: ' + ' },
		{ label: '-', value: ' - ' },
		{ label: 'x', value: ' x ' },
		{ label: '÷', value: ' ÷ ' },
		{ label: '=', value: ' = ' },
		{ label: 'c', value: ' c ' }
	];

	


	// Processo para iterar o vetor buttonValue com o método .map() retornando os números de [0-9].
	const Buttons = BUTTON_VALUES.map((button) => {
	  	const buttons = (
		  	<button 
		  	id="calc-buttons"
		  	key={button.label} 
		  	onClick={() => {props.onClick(button.value)}}
		  	className="col btn-lg btn-secondary m-1">
		  		{button.label}
		  	</button>
		  );
	  	return buttons
  	});

	// Processo para iterar o vetor buttonValue com o método .map() retornando os operandos.
  	const Ops = OPERATION_VALUES.map((button) => {
	  	const buttons = (
		  	<button 
		  	id="calc-buttons"
		  	key={button.label} 
		  	onClick={() => {props.onClick(button.value)}}
		  	className="btn-lg btn-white m-1">
		  		{button.label}
		  	</button>
		  );
	  	return buttons
  	});


  	// Layout que será renderizado //
	return (
		<div id="calc-buttons-container" className="row m-2 border p-2 ">
			<div className="col-sm-7">
				{Buttons}
			</div>

	        <div className="col-sm">
	        	{Ops}
	       	</div>
        </div>
	);
}

export default CalcButton