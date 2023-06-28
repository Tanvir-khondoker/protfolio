import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
      </div>
    </>
  );
}

export default App;
