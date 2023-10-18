import React, { useContext } from "react";
import Board from "./components/Board";
import { TaskContext, TaskProvider } from "./context/TaskContext";

const App = () => {
  const { taskData } = useContext(TaskContext);

  return (
    <div>
      {taskData.map((data) => (
        <Board key={data.id} boardTitle={data.boardTitle} lists={data.lists} />
      ))}
    </div>
  );
};

export default App;
