// Bibliotecas //
import React from 'react';

// Componente dos botões de filtro (tudo, ativos e completos)
function FilterButton(props) {

	// Template //

	return (
	    <button 
	    type="button" 
	    className="btn toggle-btn" 
	    aria-pressed={props.isPressed}
	    onClick={() => {props.setFilter(props.name)}}>
	      	<span className="visually-hidden">Listar</span>
	      	<span>{props.name}</span>
	    </button>
	);
}

export default FilterButton;