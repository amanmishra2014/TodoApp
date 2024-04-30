import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { useState } from "react";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/welcomeMessage";
function App() {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);

    console.log(`${todoItemName} is deleted`);
  };

  return (
    <div>
      <center>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </div>
  );
}

export default App;
