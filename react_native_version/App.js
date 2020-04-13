// CLASS COMPONENT
import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import Todo from './components/Todo'
import Constants from 'expo-constants';

let id = 0

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      todoText: ''
    }
  }

  addTodo() {
    id++
    const text = this.state.todoText
    text !== '' && (
      this.setState({
        todos: [...this.state.todos, { id: id, text: text, checked: false }],
        todoText: ''
      })
    )
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          checked: !todo.checked
        }
      })
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <View style={styles.header}>
          <Text style={styles.title}>Item count: {this.state.todos.length}</Text>
          <Text style={styles.title}>Unchecked count: {this.state.todos.filter(todo => !todo.checked).length}</Text>          
        </View>
        <TextInput
          style={styles.addTodoInput}
          placeholder="Going for a walk at 7 am!"
          onChangeText={text => this.setState({ ...this.state, todoText: text })}
          value={this.state.todoText}
        />
        <TouchableOpacity 
          style={styles.addTodoButton} 
          onPress={() => this.addTodo()}
        >
          <Text style={styles.addTodoButtonColor}>Add a New TODO</Text>
        </TouchableOpacity>
        <ScrollView style={styles.fill}>
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
            />
          ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:40
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  fill: {
    flex: 1
  },
  addTodoInput: {
    height: 50,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1
  },
  addTodoButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    backgroundColor: '#057afb',
    padding: 10,
    marginTop: 20,
    marginBottom: 20
  },
  addTodoButtonColor: {
    color: 'white'
  }
})

// FUNCTION COMPONENT
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
// import Todo from './components/Todo'
// import Constants from 'expo-constants';

// let id = 0

// const App = () => {
//   const [state, setState] = useState({
//     todos: [],
//     todoText: ''
//   })

//   const addTodo = () => {
//     id++
//     const text = state.todoText
//     text !== '' && (
//       setState({
//         todos: [...state.todos, { id: id, text: text, checked: false }],      
//         todoText: '',  
//       })
//     )
//   }

//   const removeTodo = (id) => {
//     setState({
//       todos: state.todos.filter(todo => todo.id !== id)
//     })
//   }

//   const toggleTodo = (id) => {
//     setState({
//       todos: state.todos.map(todo => {
//         if (todo.id !== id) return todo
//         return {
//           ...todo,
//           checked: !todo.checked
//         }
//       })
//     })
//   }

//   return (
//     <View style={[styles.appContainer, styles.fill]}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Item count: {state.todos.length}</Text>
//         <Text style={styles.title}>Unchecked count: {state.todos.filter(todo => !todo.checked).length}</Text>          
//       </View>
//       <TextInput
//         style={styles.addTodoInput}
//         placeholder="Going for a walk at 7 am!"
//         onChangeText={text => setState({...state, todoText: text })}
//         value={state.todoText}
//       />
//       <TouchableOpacity 
//         style={styles.addTodoButton} 
//         onPress={() => addTodo()}
//       >
//         <Text style={styles.addTodoButtonColor}>Add a New TODO</Text>
//       </TouchableOpacity>
//       <ScrollView style={styles.fill}>
//         {state.todos.map(todo => (
//           <Todo
//             key={todo.id}
//             todo={todo}
//             onDelete={() => removeTodo(todo.id)}
//             onToggle={() => toggleTodo(todo.id)}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingTop: Constants.statusBarHeight,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     height:40
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   fill: {
//     flex: 1
//   },
//   addTodoInput: {
//     height: 50,
//     textAlign: 'center',
//     borderColor: 'gray',
//     borderWidth: 1
//   },
//   addTodoButton: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     backgroundColor: '#057afb',
//     padding: 10,
//     marginTop: 20,
//     marginBottom: 20
//   },
//   addTodoButtonColor: {
//     color: 'white'
//   }
// })

// export default App