import React, {useState} from 'react';


// Componente do Formulário para adicionar taréfas.
function Form(props) {
	
	const [name, setName] = useState('');

	function addTask(e) {
		e.preventDefault(); // Retira o comportamento padrão do input[submit]
		
		if (name !== '') {
			props.onSubmit(name);
			setName('');
		} else {
			alert('Insira um nome para à taréfa antes de submeter');
		}
	}

	function handleChange(e) {
	 	setName(e.target.value);
	}

	return (
		<form onSubmit={addTask}>
	        <h2 className="label-wrapper">
	        	<label htmlFor="new-todo-input" className="label__lg">
	        		O que precisa ser feito?
	        	</label>
	        </h2>
	        <input
	          type="text"
	          id="new-todo-input"
	          className="input input__lg"
	          name="text"
	          autoComplete="off"
	          value={name}
	          onChange={handleChange}
	        />
	        <button type="submit" className="btn btn__primary btn__lg">
	        	Adicionar
	        </button>
      </form>

	);
}

export default Form;