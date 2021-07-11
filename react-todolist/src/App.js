import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoListForm from './TodoListForm';

function App() {
  const [Todos, SetTodos] = useState([]);

  const RemoveTodo = (id) => {
    SetTodos(Todos.filter(List =>{
    return List.id !== id;
    }));
  };


const RenderTodoList = Todos.length ? Todos.map(List => {
  return(
    <TodoList
    List={List}
    key={List.id}
    RemoveTodo = {RemoveTodo}
    />
  );
}) : <span style ={{color: "white"}}>추가된 todo가 없습니다.</span>;
  const AddTodo = (List) =>{
    SetTodos([
      ...Todos,
      List
    ]);
  };
return (
    <div className="App">
      <h1 style={{color: "white"}}>TodoList!</h1>
      <TodoListForm AddTodo={AddTodo} />
      {RenderTodoList}
    </div>
  );
};
export default App;
