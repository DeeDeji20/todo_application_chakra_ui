import { HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'

const AddTodo = ({addTodo}) => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(content);
  }

  const [content, setContent] = useState(addTodo)
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt= "8">
        <Input placeholder= "Enter a todo" variant="filled" value={content} onChange={(e)=> setContent(e.target.value)} />
        <Button colorScheme="pink" px="8" type='submit'>Add Todo</Button>
      </HStack>
    </form>
  )
}

export default AddTodo