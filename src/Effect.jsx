import React, { useEffect, useState } from "react";

const Effect = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  // useEffect is similar to componentDidMount & componentDidUpdate used in Class lifecycle method
  useEffect(() => {
    //update the document title using the browser API
    document.title = `Clicked (${num} times)`;
  });

  /*useEffect(() => {
    console.log("i am called from inside of useEffect");
  }, [nums]);

  console.log("I am called from outside of useEffect");*/

  return (
    <React.Fragment>
      <h1> Hi this is for learning useEffect</h1>
      <br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
      <br />

      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click Me {nums}
      </button>
    </React.Fragment>
  );
};

export default Effect;
