import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let hello = "Welcome to Gamestore";

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer hello={hello} />
    </div>
  );
}

export default App;
