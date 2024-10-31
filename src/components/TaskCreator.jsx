import React, { useState } from "react";
import "../App.css";

export const TaskCreator = ({ CreateNewTask }) => {
  const [task, setTask] = useState();
  const newTask = () => {
    console.log(task);
    CreateNewTask(task);
    //localStorage.setItem('task', task);
    setTask("");
  };

  return (
    <div className=" row my-2">
      <div className="col-9">
        <input
          type="text"
          name=""
          id=""
          placeholder="Ingrese la tarea aqui"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="form-control"
        />
      </div>

      <div className="col-3">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            e.preventDefault();
            newTask();
          }}
        >
          save task
        </button>
      </div>
    </div>
  );
};
