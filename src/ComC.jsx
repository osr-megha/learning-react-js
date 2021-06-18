import React from "react";
import { FirstName, LastName } from "./App";

function ComC() {
  return (
    <React.Fragment>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <div>
                    <h1>
                      I am {fname} {lname}.
                    </h1>
                    <p> I am from Component C. </p>
                  </div>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </React.Fragment>
  );
}

export default ComC;
