import "./EntryHeader.css";

const EntryHeader = ({ title }) => {
  return (
    <div className="entry-header">
      <h1>{title}</h1>
    </div>
  );
};
export default EntryHeader;
