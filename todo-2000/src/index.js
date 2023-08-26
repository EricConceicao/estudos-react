import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Estudar", completed: true },
  { id: "todo-1", name: "Terminar de Estudar", completed: false },
  { id: "todo-2", name: "Mimir", completed: false },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App sujeito="Jorjom" tasks={DATA} />
	</React.StrictMode>
);

