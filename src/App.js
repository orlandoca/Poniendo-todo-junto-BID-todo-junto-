import "./App.css";
import PersonCard from "./components/Personcard.js";

function App() {
  return (
    <div className="App">
      <div className="containt-main">
        <PersonCard first="Doe " last="Jane" age={45} hair="Black" />
        <PersonCard first="Smith" last="John" age={88} hair="Brown" />
      </div>
    </div>
  );
}

export default App;
