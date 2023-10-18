import React from "react";
import styles from "./Task.module.css";

const Task = ({ taskTitle }) => {
  return <div className={styles.task}>{taskTitle}</div>;
};

export default Task;
