import React from "react";
import styles from "./Task.module.css";

const Task = ({ taskTitle, taskId }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ taskTitle, taskId })
    );
  };

  return (
    <div className={styles.task} draggable="true" onDragStart={handleDragStart}>
      {taskTitle}
    </div>
  );
};

export default Task;
