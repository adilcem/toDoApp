import React from 'react';
import '../App.css'

const Todo = props => (
    <li className='todo-container'>
      <div className='row'>
        <div className='left'>
          <input type='checkbox' checked={props.todo.checked} onChange={props.onToggle}/>
        </div>
        <div className='middle'>
          {props.todo.text}
        </div>
        <div className='right'>
          <button className='btn btn-danger' onClick={props.onDelete}>Delete</button>
        </div>
      </div>
    </li>
  )

  export default Todo