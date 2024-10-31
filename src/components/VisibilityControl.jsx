import React, { useState } from "react";

export const VisibilityControl = ({
  setShowCompleted,
  cleanTask,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("Esta seguro que desea limpiar la bandeja?")) {
      cleanTask();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-sacondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          className="form-check-input"
          onChange={(e) => {
            setShowCompleted(e.target.checked);
          }}
        />
      </div>

      <label>Mostrat Tareas Realizadas</label>

      <button
        className="btn btn-danger rounded-0"
        type="button"
        onClick={handleDelete}
      >
        Clean
      </button>
    </div>
  );
};
