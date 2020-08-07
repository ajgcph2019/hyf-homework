import * as React from "react";
import ToDoList from "../ToDoList/ToDoList";

class ToDoItems extends React.Component {
    render(){
        const arrayTodolist = [
            {
              description: " Get out of bed",
              deadline: "Wed Sep 13 2017",
            },
            {
              description: "Brush teeth",
              deadline: "Thu Sep 14 2017",
            },
            {
              description: "Eat breakfast",
              deadline: "Fri Sep 15 2017",
            },
          ];

          return (
           <div className="todo-class">
  {arrayTodolist.map(todo => (
                    <ToDoList
                        key={todo.description}
                        key={todo.deadline}
                       
                    />
                ))}
           </div>
           );
              
    }
}
            
  export default ToDoItems;  
    

