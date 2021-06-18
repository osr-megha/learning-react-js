import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();

const LastName = createContext();

function App() {
  return (
    <React.Fragment>
      <FirstName.Provider value={"Megha"}>
        <LastName.Provider value={"Sharma"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </React.Fragment>
  );
}

export default App;
export { FirstName, LastName };
