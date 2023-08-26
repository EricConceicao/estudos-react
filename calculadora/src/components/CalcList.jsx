import { useState } from 'react';

function CalcList(props) {

	const [editing, setEditing] = useState(false);
	const [name, setName] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		props.editName(props.id, name);
		setName('');
		setEditing(false);
	}

	function handleChange(e) {
		setName(e.target.value);
	}

	const calcItem = (
		<>
			<li className="list-group-item p-1 my-1" id={props.id}>
				<h3>{props.name}</h3>
				{props.expression}
				<strong>{props.result}</strong>
			</li>
			<div className="col">
				<button	className="btn-sm btn-info col-6 rounded" onClick={() => {setEditing(true)}}>
					Editar
				</button>
				<button className="btn-sm btn-warning col-6 rounded" onClick={() => { props.deleteItem(props.id)}}>
					Apagar
				</button>
			</div>
		</>
	);

	const itemEditor = (
		<li className="list-group-item my-1" id={props.id}>
			<form onSubmit={handleSubmit}>
				<label>Editar nome</label>
				<input type="text" placeholder={props.name} onChange={handleChange} />
				<button type="submit">Salvar</button>
			</form>
		</li>
	);

	return editing ? itemEditor : calcItem
}

export default CalcList