import React from 'react'
import {VStack, HStack, Text, IconButton, StackDivider, Spacer} from '@chakra-ui/react';
import {FaTrash} from 'react-icons/fa'
const TodoList = (props) => {
  const {todos} = props;
 
  return (
    <VStack
      divider={<StackDivider/>}
      borderColor="gray.100"
      borderWidth="2px"
      p= '4'
      borderRadius='lg'
      width="100%"
      maxW={{base:'90vw', sm: '80vw', lg:'50vw',xl:'40vw'}}
      alignItems='stretch'
    >
      {todos.map((todo)=>(
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton icon= {<FaTrash />} isRound='true'/>
        </HStack> 
      ))}
    </VStack>
  )
}

export default TodoList