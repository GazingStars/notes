import "./Sidebar.css";
import JournalEntry from "./JournalEntry/JournalEntry.jsx";
import PJ from "../../assets/PJ.svg";

const Sidebar = ({ allData, onSelectEntry, onNewEntry }) => {
  return (
    <aside className="sidebar">
      <img src={PJ} alt="PJ" />
      <button className="new-entry" onClick={onNewEntry}>
        + Новое воспоминание
      </button>
      <div className="entries">
        {allData.map((entry) => (
          <div key={entry.id} onClick={() => onSelectEntry(entry)} className="entry-item">
            <JournalEntry title={entry.header} date={entry.date} preview={entry.text} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
