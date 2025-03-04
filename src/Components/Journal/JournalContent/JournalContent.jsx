import "./JournalContent.css";
import EntryHeader from "../EntryHeader/EntryHeader";
import EntryTags from "../EntryTags/EntryTags";
import EntryText from "../EntryText/EntryText";
import SaveButton from "../SaveButton/SaveButton";

const JournalContent = ({ onSubmit }) => {
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <main className="journal-content">
      <form action="" onSubmit={addJournalItem}>
        <EntryHeader />
        <div className="mt-1">
          <EntryTags tags={["Спорт"]} date="21.06.2022" />
          <EntryText />
        </div>
        <div className="mt-2">
          <SaveButton />
        </div>
      </form>
    </main>
  );
};
export default JournalContent;
