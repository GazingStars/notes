import "./JournalEntry.css";

const JournalEntry = ({ title, date, preview }) => {
  return (
    <div className="journal-entry">
      <h3>{title}</h3>
      <div className="date-preview">
        <span>{date}</span>
        <p>{preview}</p>
      </div>
    </div>
  );
};
export default JournalEntry;
