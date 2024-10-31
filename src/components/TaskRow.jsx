import React from "react";

export const TaskRow = ({ task, ToggledTask }) => {
  return (
    <tr key={task.name}>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          name=""
          id=""
          checked={task.done}
          onChange={() => {
            ToggledTask(task);
          }}
        />
      </td>
    </tr>
  );
};
