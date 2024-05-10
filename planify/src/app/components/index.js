import React, { useState } from 'react'; 
  
const App = () => { 
    const [userInput, setUserInput] = useState(''); 
    const [list, setList] = useState([]); 
  
    // Set a user input value 
    const updateInput = (value) => { 
        setUserInput(value); 
    }; 
  
    // Add item if user input is not empty 
    const addItem = () => { 
        if (userInput !== '') { 
            const userInputItem = { 
                // Add a random id which is used to delete 
                id: Math.random(), 
  
                // Add a user value to list 
                value: userInput, 
            }; 
  
            // Update list 
            setList([...list, userInputItem]); 
  
            // Reset state 
            setUserInput(''); 
        } 
    }; 
  
    // Function to delete item from list using id to delete 
    const deleteItem = (key) => { 
        const updatedList =  
              list.filter((item) => item.id !== key); 
        setList(updatedList); 
    }; 
  
    const editItem = (index) => { 
        const editedTodo = prompt('Edit the todo:'); 
        if (editedTodo !== null && editedTodo.trim() !== '') { 
            const updatedTodos = [...list]; 
            updatedTodos[index].value = editedTodo; 
            setList(updatedTodos); 
        } 
    }; 
}