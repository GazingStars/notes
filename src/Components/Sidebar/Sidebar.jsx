import "./Sidebar.css";
import JournalEntry from "./JournalEntry/JournalEntry.jsx";
import PJ from "../../assets/PJ.svg";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={PJ} alt="PJ"/>
      <button className="new-entry">+ Новое воспоминание</button>
      <div className="entries">
        <JournalEntry
          title="Подготовка к обновлению курсов"
          date="31.12.2025"
          preview="Сегодня провел весь день за..."
        />
        <JournalEntry
          title="Поход в годы"
          date="21.06.2025"
          preview="Думал, что очень много време..."
        />
        <JournalEntry
          title="Первая заметка"
          date="11.04.2025"
          preview="Создал первую заметку, чтобы ..."
        />
      </div>
    </aside>
  );
};
export default Sidebar;
