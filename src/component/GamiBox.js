import { Avatar } from "@material-ui/core";
import React from "react";

import "../css/GamiBox.css";

function GamiBox(){
    return(
        <div className="gamiBox">
<div className = "gamiBox_info">
    <Avatar/>
    <h5>Username</h5>
</div>

<div className= "gamiBox__game">
    <p> what is your question or link? </p>
</div>
        </div>
    )}

    export default GamiBox;