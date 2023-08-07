// Bibliotecas //
import React, {useState} from 'react';
import {nanoid} from 'nanoid'; // Ajuda criando strings únicas.

// Importações de componentes //
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

// Funções para os filtros.
const FILTER_MAP = {
  todas: () => true,
  ativas: (task) => !task.completed,
  completas: (task) => task.completed
};
// Criando um array com os nomes dos filtros.
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  // Hooks //

  // Adiciona, remove e edita tarefas
  const [tasks, setTasks] = useState(props.tasks);
  
  // Alterna o filtro da lista
  const [filter, setFilter] = useState('todas');

  // Funções //

  // Adicionar uma tarefa
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };

    setTasks([...tasks, newTask]);
  }

  // Alterna a tarefa para feito ou afazer (true ou false).
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {

      // Se o id for igual a tarefa editada.
      if (task.id === id && task.completed === false) {
 
        // Marca a tarefa como feita.
        return task.completed = true;

      } else if (task.id === id && task.completed === true) { 

        // E este desmarca a tarefa
        return task.completed = false;
      }

      return task;
    });

    return updatedTasks;
  }

  // Deleta uma tarefa
  function deleteTask(id) {
    // Filtra as tarefas retirando da lista pelo id.
    const remainingTasks = tasks.filter(task => task.id !== id);

    return setTasks(remainingTasks);
  }

  // Edita uma tarefa trocando seu nome
  function editTask(id, newName) {

    const editedTask = tasks.map((task) => {
      if (task.id === id) {

        return { ...task, name: newName };
      }

      return task
    });

    setTasks(editedTask);
  }

  // Definições de compenentes e outros //

  // Cria uma lista de botões de filtro com base nos nomes de nosso array
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
    key={name} 
    name={name}
    isPressed={name === filter}
    setFilter={setFilter} />
  ));


  // Iteração para criar componentes <Todo /> e atribuições de props
  // Sempre passe o atributo key("Chave única") para tudo que se renderiza com iteração.
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  // Contagem de itens do cabeçário e plural condicional.
  const tasksNoun = taskList.length !== 1 ? "Tarefas" : "Tarefa";
  const headingText = `${taskList.length} ${tasksNoun} Restando`;


  // Template //

  return (
    <div className="todoapp stack-large">

      <h1>O Afazer 2000</h1>

      <Form onSubmit={addTask} />

      <div className="filters btn-group stack-exception">
        {filterList}
      </div>

      <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">

        {taskList}
      </ul>
    </div>
  );
}

export default App;
