import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [taskItem, setTaskItem] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const CreateNewTask = (newTask) => {
    if (!taskItem.find((task) => task.name === newTask)) {
      setTaskItem([...taskItem, { name: newTask, done: false }]);
    } else {
      alert("duplicate");
    }
  };

  const ToggledTask = (task) => {
    setTaskItem(
      taskItem.map((tsk) =>
        tsk.name === task.name ? { ...tsk, done: !task.done } : tsk
      )
    );
  };

  const deleteTask = () => {
    setTaskItem(taskItem.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("task");
    if (data) {
      setTaskItem(JSON.parse(data));
    } else {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItem));
  }, [taskItem]);

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container col-md-4 offset-md-4 p-4">
        <TaskCreator CreateNewTask={CreateNewTask} />

        <TaskTable
          tasks={taskItem}
          ToggledTask={ToggledTask}
          taskdone={false}
        />
        <br />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={deleteTask}
        />

        {showCompleted === true ? (
          <TaskTable
            tasks={taskItem}
            ToggledTask={ToggledTask}
            taskdone={true}
          />
        ) : null}
      </div>
    </main>
  );
}

export default App;
