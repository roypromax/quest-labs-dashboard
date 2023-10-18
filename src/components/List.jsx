import React, { useContext } from "react";
import Task from "./Task";
import styles from "./List.module.css";
import { TaskContext } from "../context/TaskContext";

const List = ({ listTitle, listId, tasks }) => {
  const { taskData, setTaskData } = useContext(TaskContext);

  console.log(taskData);

  const handleDrop = (e) => {
    e.preventDefault();

    const draggedTaskData = JSON.parse(
      e.dataTransfer.getData("application/json")
    );
    const { taskTitle, taskId } = draggedTaskData;

    const updatedTaskData = taskData.lists.reduce((acc, list) => {
      if (list.id === listId) {
        acc.push({
          ...list,
          tasks: [...list.tasks, { id: taskId, title: taskTitle }],
        });
      } else if (list.tasks.find((task) => task.id === taskId)) {
        acc.push({
          ...list,
          tasks: list.tasks.filter((task) => task.id !== taskId),
        });
      } else {
        acc.push(list);
      }
      return acc;
    }, []);

    setTaskData({ ...taskData, lists: updatedTaskData });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.list}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>{listTitle}</h3>
      <div className={styles.tasks}>
        {tasks.map((task) => {
          return <Task key={task.id} taskId={task.id} taskTitle={task.title} />;
        })}
      </div>
    </div>
  );
};

export default List;
