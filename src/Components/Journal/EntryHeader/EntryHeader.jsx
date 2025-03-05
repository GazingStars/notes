import { useState, useEffect } from "react";
import "./EntryHeader.css";

const EntryHeader = ({ text }) => {
  const [value, setValue] = useState(text || "");

  useEffect(() => {
    setValue(text || "");
  }, [text]);

  return (
    <input
      name="header"
      type="text"
      className="entry-text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Заголовок"
    />
  );
};

export default EntryHeader;
