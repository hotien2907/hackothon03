import React from "react";

function Textarea({ handleApp, }) {
  const handleChangeInput = (e) => {
    handleApp(e.target.value);
  };

  return (
    <div className="textarea">
      <textarea
        cols="30"
        rows="10"
        placeholder="Enter/Paste your Text Here"
        onChange={handleChangeInput}
      ></textarea>
    </div>
  );
}

export default Textarea;
