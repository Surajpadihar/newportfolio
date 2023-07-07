
import './App.css';


// import {BrowserRouter, Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// // import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";




function App() {
 
  return (
    
    
    
      <div className="">
      <Navbar/> 
      <Home/> 
      <About/>
       <Portfolio/>
      <Technologies/> 
     
    </div>
     
     
  );
}

export default App;
