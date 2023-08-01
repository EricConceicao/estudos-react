import React, {useState} from 'react';

// Componente do item da lista de coisas a fazer.

function Todo(props) {

  const [isEditing, setEditing] = useState(false);

  const editingTemplate = (
    <form className="stack-small">
      <div className="form-group">

        <label className="todo-label" htmlFor={props.id}>
          Novo nome para: {props.name}
        </label>

        <input id={props.id} className="todo-text" type="text" />
      </div>

      <div className="btn-group">
        <button type="button" className="btn todo-cancel">
          Cancelar
          <span className="visually-hidden">Edição: {props.name}</span>
        </button>

        <button type="submit" className="btn btn__primary todo-edit">
          Salvar
          <span className="visually-hidden">Novo nome para: {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
		<div className="stack-small">
      <div className="c-cb">
        <input 
          id={props.id} 
          type="checkbox" 
          defaultChecked={props.completed} 
          onChange={() => props.toggleTaskCompleted(props.id)}
        />

        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>

      <div className="btn-group">
        <button type="button" className="btn" onClick={props.editTask(props.id)}>
          Editar 
          <span className="visually-hidden">{props.name}</span>
        </button>

        <button 
          type="button" 
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Deletar 
          <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  )

  // Se estiver editando, ele retonar o template de edição. Do contrário, o padrão.
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;