import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();

function App() {
  return (
    <React.Fragment>
      <FirstName.Provider>
        <ComA />
      </FirstName.Provider>
    </React.Fragment>
  );
}

export default App;
