import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import JournalContent from "./Components/Journal/JournalContent/JournalContent";
import { useState } from "react";

function App() {
  
  const [allData, setAllData] = useState([]);

  const onSubmit = (data) => {
    setAllData((prevData) => [...prevData, data]);
  };

  return (
    <div className="app-container">
      <Sidebar allData={allData}/>
      <JournalContent onSubmit={onSubmit} />
    </div>
  );
}

// header= {dataToS.header} text={dataToS.text} date= {dataToS.date}

export default App;
