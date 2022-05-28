import { HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

const AddTodo = () => {
  const handleSubmit=()=>{

  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt= "8">
        <Input placeholder= "Enter a todo" variant="filled"/>
        <Button colorScheme="pink" px="8" type='submit'>Add Todo</Button>
      </HStack>
    </form>
  )
}

export default AddTodo