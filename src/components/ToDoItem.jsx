import React, { useState } from "react";

const ToDoItem = (props) => {
  return (
    <li
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      {props.todo}
    </li>
  );
};

export default ToDoItem;
