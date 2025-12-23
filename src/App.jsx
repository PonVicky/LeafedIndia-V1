import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <Hero />
    </div>
  );
}

export default App;
