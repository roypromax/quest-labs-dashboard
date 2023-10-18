import { createContext, useState } from "react";
import dummyData from "../data/dummyData";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState(dummyData);

  return (
    <TaskContext.Provider value={{ taskData, setTaskData }}>
      {children}
    </TaskContext.Provider>
  );
};
