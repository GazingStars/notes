import "./JournalContent.css";
import EntryHeader from "../EntryHeader/EntryHeader";
import EntryTags from "../EntryTags/EntryTags";
import EntryText from "../EntryText/EntryText";
import SaveButton from "../SaveButton/SaveButton";

const JournalContent = () => {
  return (
    <main className="journal-content">
      <EntryHeader title="Поход в годы" />
      <EntryTags tags={["Спорт"]} date="21.06.2022" />
      <EntryText text="Горные походы открывают удивительные природные ландшафты..." />
      <SaveButton />
    </main>
  );
};
export default JournalContent;
