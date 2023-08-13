import './App.css';
import { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); 
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleInput={handleInput}/>
      <TodoList todos={todos} setTodos={setTodos}/>
        
    </div>
  );
}

export default App;
