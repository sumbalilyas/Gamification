import React from "react";
import '../css/Gamify.css';
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function Gamify() {
    return (
     
          <div className="quora">
             hi gform gamify  
             <Navbar/>
           <div className= "quora__content" >
             <Sidebar/>
             <Feed/>
             <Widget/>
             </div>
      </div>
    ); 
  }
  
  export default Gamify;
  