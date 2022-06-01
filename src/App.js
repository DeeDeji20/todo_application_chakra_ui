import {Heading} from '@chakra-ui/react'
import {VStack, IconButton} from '@chakra-ui/react'
import {FaSun, FaMoon} from 'react-icons/fa'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react'

function App() {

  const initialTodos = [
    {
      id: 1,
      body: "read journal"
    },
    {
      id: 2,
      body: "sleep well"
    }
  ]
  
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (todo)=>{
    setTodos([...todos, todo])
  }

  const deleteTodo = (id)=>{
    const newTodos = todos.filter(todo =>{
      return todo.id !== id;
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <VStack p={4}>
        <IconButton icon = {<FaSun/>} isRound='true' size='lg' alignSelf='flex-end' />
        <Heading mb='g' fontWeight='extrabold' bgGradient='linear(to-r, pink.500, blue.200, pink.300)'bgClip='text' >
          Todo Application
        </Heading>
        <TodoList todos ={todos} deleteTodo= {deleteTodo}/>
        <AddTodo addTodo= {addTodo} />
      </VStack>

    </div>
  );
}

export default App;
