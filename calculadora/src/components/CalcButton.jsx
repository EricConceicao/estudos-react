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
		  	id="calc-button"
		  	key={button.label} 
		  	onClick={() => {props.onClick(button.value)}}
		  	className="col-sm-3 btn-lg btn-secondary">
		  		{button.label}
		  	</button>
		  );
	  	return buttons
  	});

	// Processo para iterar o vetor buttonValue com o método .map() retornando os operandos.
  	const Ops = OPERATION_VALUES.map((button) => {
	  	const buttons = (
		  	<button 
		  	id="calc-button"
		  	key={button.label} 
		  	onClick={() => {props.onClick(button.value)}}
		  	className="btn-lg btn-secondary">
		  		{button.label}
		  	</button>
		  );
	  	return buttons
  	});


  	// Layout que será renderizado //
	return (
		<div className="row">
			<div className="col-sm-5">
				<div className="row">
					{Buttons}
				</div>
			</div>

	        <div className="col-sm-1">
	        	<div className="row">
	        		{Ops}
	       		</div>
	       	</div>
        </div>
	);
}

export default CalcButton