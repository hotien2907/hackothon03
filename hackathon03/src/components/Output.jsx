import React from "react";

function Output({ Arrtext, Arr2 }) {
  return (
    <div>
      <div className="wrapper_flex">
        <div className="box">
          <p>Word</p>

          <p>{Arrtext.length}</p>
        </div>
        <div className="box">
          <p>Letter</p>
          <p>{Arrtext.join().length}</p>
        </div>
        <div className="box">
          <p>Paragraph</p>
          <p>{Arr2.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Output;
