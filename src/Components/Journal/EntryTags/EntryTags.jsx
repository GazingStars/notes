import "./EntryTags.css";
import calendar from "../../../assets/calendar.svg";
import folder from "../../../assets/folder.svg";

const EntryTags = ({ tags }) => {
  let date = "";

  const dataChange = (e) => {
    date = e.target.value;
    console.log(date);
  };

  return (
    <div className="entry-date-tags">
      <div className="entry-date">
        <div className="entry-date__calendar--date">
          <img src={calendar} alt="Calendar" />
          <span>Дата</span>
        </div>
        <input type="date" name="date" onChange={dataChange} />
      </div>
      <div className="entry-tags">
        <div className="entry-date__calendar--date">
          <img src={folder} alt="Calendar" />
          <span>Метки</span>
        </div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default EntryTags;
