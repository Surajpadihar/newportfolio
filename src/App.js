import "./App.scss";
import About from "./components/About";
import Intro from "./components/Intro";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
    return <div className="h">
       <Intro/>
       <Skills/>
       <Portfolio/>
       <Contact/>
       <About/>
    </div>;
}

export default App;
