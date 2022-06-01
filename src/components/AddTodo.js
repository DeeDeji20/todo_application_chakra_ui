import { HStack, Input, Button,  useToast } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import {nanoid} from 'nanoid'

const AddTodo = ({addTodo}) => {
  const toast =useToast()
  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!content){
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return;
    }
 
    const todo ={
      id:nanoid(),
      body:content
    }
    addTodo(todo)
  }

  const [content, setContent] = useState("")
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