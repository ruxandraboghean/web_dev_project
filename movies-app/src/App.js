import "./App.scss";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Movies</h2>
        <Search />
      </header>
    </div>
  );
}

export default App;
