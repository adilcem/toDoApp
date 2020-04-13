// CLASS COMPONENT
import React from 'react';
import './App.css';
import Todo from './components/Todo'

let id = 0

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("Please enter your new To-Do!", "Going for a walk at 7 am");
    text !== null && (
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked:false }],
    })
    )
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id !== id) return todo
        return {
          ...todo,
          checked: !todo.checked
        }
      })
    })
  }

  render() {
    return (
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <div className="flow-right controls">
          <span>Item count: {this.state.todos.length}</span>
          <span>Unchecked count: {this.state.todos.filter(todo => !todo.checked).length}</span>
        </div>
        <button className="button center btn btn-primary" onClick={() => this.addTodo()}>New TODO</button>
        <ul className='todo-list'>
          {this.state.todos.map(todo => (
            <Todo 
              key={todo.id}
              todo={todo} 
              onDelete={() => this.removeTodo(todo.id)} 
              onToggle={() => this.toggleTodo(todo.id)}
            />
          ))
          }
        </ul>
      </div>
    )
  }
}

export default App;

// FUNCTION COMPONENT

// import React, {useState} from 'react';
// import './App.css';
// import Todo from './components/Todo'

// let id = 0

// const App = () => {
//   const [state, setState] = useState({
//     todos: []
//   })


//   const addTodo = () => {
//     const text = prompt("Please enter your new To-Do!", "Going for a walk at 7 am");
//     if(text !== null){
//       setState({
//         todos: [...state.todos, { id: id++, text: text, checked:false }],
//       })
//     }
//   }

//   const removeTodo = (id) => {
//     setState({
//       todos: state.todos.filter(todo => todo.id !== id)
//     })
//   }

//   const toggleTodo = (id) => {
//     setState({
//       todos: state.todos.map(todo => {
//         if(todo.id !== id) return todo
//         return {
//           ...todo,
//           checked: !todo.checked
//         }
//       })
//     })
//   }

//   return (
//     <div className="container center">
//       <h1 className="center title">TODO App</h1>
//       <div className="flow-right controls">
//         <span>Item count: {state.todos.length}</span>
//         <span>Unchecked count: {state.todos.filter(todo => !todo.checked).length}</span>
//       </div>
//       <button className="button center btn btn-primary" onClick={addTodo}>New TODO</button>
//       <ul className='todo-list'>
//         {state.todos.map(todo => (
//           <Todo 
//             key={todo.id}
//             todo={todo} 
//             onDelete={removeTodo(todo.id)} 
//             onToggle={toggleTodo(todo.id)}
//           />
//         ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default App

