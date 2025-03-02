import "./EntryText.css";
import { useState } from "react";

const EntryText = ({ text }) => {
  const [value, setValue] = useState(text);

  return (
    <input
      type="text"
      className="entry-text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EntryText;
