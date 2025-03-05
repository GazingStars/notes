import { useState, useEffect } from "react";
import "./EntryText.css";

const EntryText = ({ text }) => {
  const [value, setValue] = useState(text || "");

  useEffect(() => {
    setValue(text || "");
  }, [text]);

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
