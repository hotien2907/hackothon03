import React, { useState } from "react";
import Textarea from "./Textarea";
import Output from "./Output";

function HomePage() {
  const [inputText, setInputText] = useState("");
  const [arrText, setArrText] = useState([]);
  const [arr2, setArr2] = useState([]);

  const handleApp = (input) => {
    setInputText(input);
    const arr = input.split(" ");
    setArrText(arr);
    const arr2 = input.split("\n");
    setArr2(arr2);
  };

  const handleToUpperCase = () => {
    const upperCaseArr = arrText.map((word) => word.toUpperCase());
    setArrText(upperCaseArr);
  };

  const handleToLowercase = () => {
    const lowerCaseArr = arrText.map((word) => word.toLowerCase());
    setArrText(lowerCaseArr);
  };

  return (
    <div className="backGround">
      <div className="container">
        <p>Word Counter</p>
        <Output Arrtext={arrText} Arr2={arr2} />

        <Textarea
          handleApp={handleApp}
          handleToUpperCase={handleToUpperCase}
          handleToLowercase={handleToLowercase}
        />

        <div className="button">
          <button onClick={handleToUpperCase}>Click to Uppercase</button>
          <button onClick={handleToLowercase}>Click to Lowercase</button>
        </div>
      </div>

      {/* hiển thi  nôi dung chữ */}
      {arrText.map((item, i) => (
        <div className="content" key={i}>{item}</div>
      ))}
    </div>
  );
}

export default HomePage;
