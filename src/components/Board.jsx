import React from "react";
import styles from "./Board.module.css";
import List from "./List";

const Board = ({ boardTitle, lists }) => {
  return (
    <div className={styles.board}>
      <h2>{boardTitle}</h2>
      <div className={styles.lists}>
        {lists.map((list) => {
          return (
            <List key={list.id} listTitle={list.title} tasks={list.tasks} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
