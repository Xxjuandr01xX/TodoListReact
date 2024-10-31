import React, { useState, useEffect } from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, ToggledTask, taskdone }) => {
  const taskTableRows = (doneValue) => {
    console.log(doneValue);

    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => <TaskRow task={task} ToggledTask={ToggledTask} />);
  };

  return (
    <div className="">
      <table className="table table-dark table-stripped table-bordered border-secondary table-hover">
        <thead className="table-primary">
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(taskdone)}</tbody>
      </table>
    </div>
  );
};
