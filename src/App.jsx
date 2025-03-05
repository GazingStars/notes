import "./App.css";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import JournalContent from "./Components/Journal/JournalContent/JournalContent";

function App() {
  const [allData, setAllData] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleNewEntry = () => {
    const newEntry = {
      id: Date.now(),
      header: "",
      text: "",
      date: new Date().toISOString().split("T")[0],
    };
    setSelectedEntry(newEntry);
  };

  const onSubmit = (data) => {
    setAllData((prevData) => {
      if (!data.id) {
        data.id = Date.now();
      }

      const existingIndex = prevData.findIndex((e) => e.id === data.id);

      if (existingIndex !== -1) {
        const updatedData = [...prevData];
        updatedData[existingIndex] = data;
        return updatedData;
      } else {
        return [...prevData, data];
      }
    });

    setSelectedEntry(data);
  };

  return (
    <div className="app-container">
      <Sidebar
        allData={allData}
        onSelectEntry={setSelectedEntry}
        onNewEntry={handleNewEntry}
      />
      <JournalContent onSubmit={onSubmit} selectedEntry={selectedEntry} />
    </div>
  );
}

export default App;
