import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi';
import React from 'react';


// localStorage.removeItem('TODOS_V1')
//  const defaultTodos =[a
//    {text: 'cortar cebolla', completed: true},
//    {text: 'hacer compras', completed: false},
//    {text: 'tomar agua', completed: false},
//    {text: 'reservar hotel', completed: true}
//  ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))



function App() {
 
return(
  <TodoProvider>
    <AppUi/>
  </TodoProvider>

)
}

export default App;
