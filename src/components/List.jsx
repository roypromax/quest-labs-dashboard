import React from "react";
import Task from "./Task";
import styles from "./List.module.css";

const List = ({ listTitle, tasks }) => {
  return (
    <div className={styles.list}>
      <h3>{listTitle}</h3>
      <div className={styles.tasks}>
        {tasks.map((task) => {
          return <Task key={task.id} taskTitle={task.title} />;
        })}
      </div>
    </div>
  );
};

export default List;
