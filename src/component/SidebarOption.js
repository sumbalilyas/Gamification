import React from "react";
import { Add } from "@material-ui/icons";
import "../css/SidebarOption.css";

function SidebarOption(){

    return(
        <div className= "sidebarOptions">
             <div className="sidebarOption"> 
      <img
   src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
   alt=""
   />
   <p>History</p>
      </div>

<div className="sidebarOption">
<img
  src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
  alt=""
/>

<p>Business</p>
</div>

<div className="sidebarOption">
<img
  src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
  alt=""
/>
<p>Psychology</p>
</div>

<div className="sidebarOption">
<img
  src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
  alt=""
/>
<p>Music</p>
</div>
<div className = "sidebarOption">

    <Add />
</div>
</div>

    )
}

export default SidebarOption;