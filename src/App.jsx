import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import JournalContent from "./Components/Journal/JournalContent/JournalContent";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <JournalContent />
    </div>
  );
}

export default App;