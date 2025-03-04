import "./EntryHeader.css";
import { useState } from "react";

const EntryHeader = ({ text }) => {
  const [value, setValue] = useState(text);

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
