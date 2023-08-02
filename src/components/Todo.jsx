// Bibliotecas //
import React, {useState} from 'react';


// Componente do item da lista de coisas afazer.
function Todo(props) {

  // Hooks // 

  // alterna o modo de edição e o padrão com true e false.
  const [isEditing, setEditing] = useState(false);
  
  // Alterna o nome da tarefa após a edição
  const [newName, setNewName] = useState('');


  // Funções //

  // Pega o que o usuário escreve como novo nome na edição.
  function handleChange(e) {
    setNewName(e.target.value);
  }

  // Cuida do submit para fazer a edição
  function handleSubmit(e) {
    e.preventDefault();
    
    props.editTask(props.id, newName)
    setNewName('');
    setEditing(false);
  } 


  // Templates //

  // View padrão das tarefas
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
        <button type="button" className="btn" onClick={() => setEditing(true)}>
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
  );

  // View de edição de tarefas
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">

        <label className="todo-label" htmlFor={props.id}>
          Novo nome para tarefa: <strong>{props.name}</strong>
        </label>

        <input 
        id={props.id} 
        className="todo-text" 
        type="text"
        value={newName}
        onChange={handleChange}
        autoComplete="off"/>
      </div>

      <div className="btn-group">
        <button 
        type="button" 
        className="btn todo-cancel" 
        onClick={() => setEditing(false)}>
          Cancelar
          <span className="visually-hidden">Edição da tarefa: {props.name}</span>
        </button>

        <button type="submit" className="btn btn__primary todo-edit">
          Salvar
          <span className="visually-hidden">Novo nome para tarefa: {props.name}</span>
        </button>
      </div>
    </form>
  );

  // Se estiver editando, ele retorna o template de edição. Do contrário, o padrão.
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;