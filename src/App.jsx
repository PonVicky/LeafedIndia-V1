import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="font-sans">
      <div className="w-full z-10 relative h-[86px] bg-[#284b63]">
       <nav className= "w-full absolute top-12  left-1/2 -translate-x-1/2 ">
        <NavBar />
       </nav>
      </div>
      <div className="w-full flex gap-0">
        <Hero />
        <nav className="h-screen w-[25%] bg-[#3c6e71]">
        </nav>
      </div>
    </div>
  );
}

export default App;
