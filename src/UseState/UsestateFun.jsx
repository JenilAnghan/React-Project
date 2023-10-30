import React, { useState } from "react";
import { Button } from "reactstrap";

export default function UseStae() {
  const colorArr = ["red", "green", "lightblue", "pink"];
  let [index, setIndex] = useState(0);
  const chnageIndex = () => {
    // condition
    if (index === 4) {
      return null;
    }
    setIndex(index + 1);
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1>{index}</h1>
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: colorArr[index],
        }}
        className="m-5"
      >
        <h1>Hello World</h1>
      </div>
      <Button color="danger" onClick={() => chnageIndex()}>
        Chnage color
      </Button>
    </div>
  );
}
