import "./App.css";
import Usercard from "./components/usercard.jsx";

function App() {
  const cards = Array.from({ length: 8 });
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    padding: "16px",
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} />
      ))}
    </div>
  );
}

export default App;
