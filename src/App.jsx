import "./App.css";
import { NavBar } from "./components/NavBar";
import { ToList } from "./components/ToList";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <ToList />
      </header>
    </>
  );
}

export default App;
