import React, {useState} from 'react';
import {nanoid} from 'nanoid'; // Ajuda criando strings únicas.

// Importações de componentes
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';


function App(props) {

  //Função para adicionar taréfa
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };

    setTasks([...tasks, newTask]);
  }

  // Sempre passe o atributo key("Chave única") para tudo que se renderiza com iteração.
  const taskList = tasks?.map((task) => (
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

  // Contagem de itens do cabeçário.
  const tasksNoun = taskList.length !== 1 ? "Taréfas" : "Taréfa";
  const headingText = `${taskList.length} ${tasksNoun} Restando`;

  // Alterna a taréfa para feito ou afazer (true ou false).
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // Se o id for igual a teréfa editada.
      if (task.id == id) {

        // Alastra o objeto task e altera a propriedade completed para false.
        return { ...task, completed: !task.completed } ;
      }

      return task;
    });

    return updatedTasks;
  }

  // Deleta uma taréfa
  function deleteTask(id) {
    // Filtra as taréfas retirando da lista pelo id.
    const remainingTasks = tasks.filter(task => task.id !== id);

    return setTasks(remainingTasks);
  }

  // Edita uma taréfa
  function editTask(id) {
    const editedTask = tasks.map((task) => {

      if (task.id === id) {

        return { ...task, newName};
      }

      return task
    });

    setTasks(editedTask);
  }

  return (
    <div className="todoapp stack-large">

      <h1>O Afazer 2000</h1>

      <Form onSubmit={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
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
