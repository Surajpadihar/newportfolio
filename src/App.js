import "./App.scss";
import Intro from "./components/Intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
    return <div className="h">
       <Intro/>
       <Skills/>
       <Portfolio/>
    </div>;
}

export default App;
