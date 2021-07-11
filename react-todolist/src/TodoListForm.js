import React, {useState} from 'react';
import './index.css'

const TodoListForm = ({AddTodo}) => {
  const [TodoTitle, setTodoTitle] = useState('');
  const [TodoYear, setTodoYear] = useState('');
  const [TitleError, setTitleError] = useState('');
  const [YearError, setYearError] = useState('');

  const ResetForm = () => {
    setTodoTitle('');
    setTodoYear('');
  }

  const ValidateForm = () => {
    ResetErrors();
    let Validated = true;
    if(!TodoTitle){
      Validated = false;
    }
    if(!TodoYear){
      Validated = false;
    }
    return Validated;
  };

  const ResetErrors = () => {
    setTitleError('');
    setYearError('');
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    if (ValidateForm()){
      AddTodo({
        id: Date.now(),
        title: TodoTitle,
        year: TodoYear,
      });
      ResetErrors();
      ResetForm();
    }
  };
  return (
      <form onSubmit={onSubmit}>
          <input
          className = "form1"
            type='text'
            value={TodoTitle}
            placeholder="Todo"
            onChange={e => setTodoTitle(e.target.value)}
            /><br />
          <input
            className = "form"
            type='date'
            value={TodoYear}
            placeholder="Date"
            onChange={e => setTodoYear(e.target.value)}
            /><br />
            <button className = "addtodo" type="onSubmit">todo추가!</button>
        </form>
    );
};

export default TodoListForm;
