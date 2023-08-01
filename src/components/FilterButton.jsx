import React from 'react';

// Componente dos botões de filtro (tudo, ativos e completos)
function FilterButton(props) {
	return (
	    <button type="button" className="btn toggle-btn" aria-pressed="true">
	      	<span className="visually-hidden">Mostrar </span>
	      	<span>Todos</span>
	      	<span className="visually-hidden"> tasks</span>
	    </button>
	);
}

export default FilterButton;