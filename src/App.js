import React,{useState} from 'react';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';

function App() { 
  const  [todos,setTodos] = useState(['Take dogs for a walk','Take out the trash','this is an example']);
  const [input,setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    //onclict add todo
    event.preventDefault(); //this is stop refreshing the page
    console.log("io","Im working");
    setTodos([...todos,input]);
    setInput(''); //clear the input
  }
  return (
    <div className="App">
      <h1>Todo List!  </h1>  
      <form>
          

           <FormControl>
              <InputLabel>Write a Todo</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)}/>
           </FormControl>
           <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
           Add todo</Button>
           {/*<button type="submit" onClick={addTodo}>Todo</button>*/}
      </form>
     

      <ul>
        {todos.map(todo => (
           <li>{todo}</li>
        ))}
         
         
      </ul>

    </div>
  );
}

export default App;
