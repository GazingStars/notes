import "./EntryText.css";
import { useState } from "react";

const EntryText = ({ text }) => {
  const [value, setValue] = useState(text);

  return (
    <input
      name="text"
      type="text"
      className="entry-text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Текст записи"
    />
  );
};

export default EntryText;
