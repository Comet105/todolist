import React,{useState} from 'react';
import './index.css';

const TodoList = ({List, RemoveTodo}) => {
const [bool, setBool] = useState(true);
const [changetitle, setChangeTitle] = useState(List.title);
const [changeyear, setChangeYear] = useState(List.year);

  const changeReform = () => {
    setBool(!bool);
  };

  return(
    <div className="List">
    <div className ="CheckBox">
    <input className="box" type = 'checkbox'/>
    </div>
    {bool ? <div>
      <div className="List-title">
      {List.title}
      </div>
     <span className="List-year">
      ({List.year})
     </span>
    </div> : <div>
      <div className="List-title">
      <input value = {changetitle} onChange={e => {setChangeTitle(e.target.value); List.title = changetitle}} placeholder="할 일" />
      </div>

     <span className="List-year">
       <input type="date" value = {changeyear} onChange={e => {setChangeYear(e.target.value); List.year = changeyear}} placeholder="일정 시간"/>
     </span>
    </div>}
    <div className="Remove-Button">
    {!bool ? <button onClick={() => changeReform()}>
      check
    </button> : <button onClick={() => changeReform()}>
      reform
    </button>}
      <button onClick={() => RemoveTodo(List.id)}>
        Delete
      </button>
    </div>
    </div>
  );
};

export default TodoList;
