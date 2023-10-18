import React from "react";
import Board from "./components/Board";
import dummyData from "./data/dummyData";

const App = () => {
  return (
    <div>
      {dummyData.map((data) => (
        <Board key={data.id} boardTitle={data.boardTitle} lists={data.lists} />
      ))}
    </div>
  );
};

export default App;
