import React from "react";
import "../css/Feed.css";
import GamiBox from "./GamiBox";
import Post from "./Post";
function Feed() {
    return(
        <div className="feed">     
        <GamiBox/> 
        <Post/>  
        
        <Post/> 
        <Post/>  </div>
    )}
export default Feed;