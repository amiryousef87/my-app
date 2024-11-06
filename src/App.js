// App.js  
import React from "react";  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Knowledge from "./pages/Knowledge";  
import Achaemenids from "./pages/Achaemenids";  
import KnowledgeBase from "./components/KnowledgeBase";  
import About from "./pages/About";  
import Header from "./components/Header";  
import "./App.css";  

function App() {  
  return (  
    <div>  
      <video autoPlay loop muted className="video-background">  
        <source src="background.mp4" type="video/mp4" />  
      </video>  

      <Router>  
        <Header />  

        <Routes>  
          <Route path="/knowledge" element={<Knowledge />} />  
          <Route path="/achaemenids" element={<Achaemenids />} />  
          <Route path="/knowledge-base" element={<KnowledgeBase />} />  
          <Route path="/about" element={<About />} />  
        </Routes>  
      </Router>  
    </div>  
  );  
}  

export default App;