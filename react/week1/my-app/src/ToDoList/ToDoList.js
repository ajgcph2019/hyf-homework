import * as React from "react";

function ToDoList(props) {
  
    //   const array = this.props.list;
     // const result = array.map((item) => {
        return (
            <div>
              <ul>
             <li>
            {props.description} {props.deadline}
          </li>
            </ul>
            </div>
            
        
        );     
    }

  export default ToDoList;