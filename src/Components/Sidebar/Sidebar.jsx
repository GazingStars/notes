import "./Sidebar.css";
import JournalEntry from "./JournalEntry/JournalEntry.jsx";
import PJ from "../../assets/PJ.svg";

const Sidebar = ({ allData }) => {
  return (
    <aside className="sidebar">
      <img src={PJ} alt="PJ" />
      <button className="new-entry">+ Новое воспоминание</button>
      <div className="entries">
        {allData.map((entry, index) => (
          <JournalEntry
            key={index}
            title={entry.header}
            date={entry.date}
            preview={entry.text}
          />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
