import React, { useContext } from "react";
import Board from "./components/Board";
import { TaskContext, TaskProvider } from "./context/TaskContext";

const App = () => {
  const { taskData } = useContext(TaskContext);

  return (
    <div>
      <Board
        key={taskData.id}
        boardTitle={taskData.boardTitle}
        lists={taskData.lists}
      />
    </div>
  );
};

export default App;
