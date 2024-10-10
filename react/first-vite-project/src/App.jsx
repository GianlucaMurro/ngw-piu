import "./App.css";
import Card1 from "./Components/Card1/Card1.jsx";
import Card2 from "./Components/Card2/Card2.jsx";
import Counter from "./Components/Counter/Counter.jsx";
import Game from "./Components/Game/Game.jsx";

function App() {
  const API = [
    {
      id: 0,
      title: "Titolo 1",
      icon: "",
      info: "13.000",
      description: "descrizione1",
    },
    {
      id: 1,
      title: "Titolo 2",
      icon: "",
      info: "54.000",
      description: "descrizione2",
    },
    {
      id: 2,
      title: "Titolo 3",
      icon: "",
      info: "3.000",
      description: "descrizione3",
    },
    {
      id: 3,
      title: "Titolo 4",
      icon: "",
      info: "4.000",
      description: "descrizione4",
    },
  ];
  return (
    <>
      <div className="cardDeck">
        {API.map((card) => (
          <Card1 title={card.title} description={card.description} />
        ))}
      </div>
      <Counter />
      <Card2 title={"Bitcoin Price Index"} />
      <Game />
    </>
  );
}

export default App;
