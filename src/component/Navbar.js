import React from "react";
import "../css/Navbar.css";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon  from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import Button from 'react-bootstrap/Button';

import HomeIcon from "@material-ui/icons/Home";

function Navbar(){
    return (
    <div className= "qHeader"> he is one and 
<div className= "qHeader_logo">
    <img  src= "./images/mainlogo.jpg" alt="" />
    </div>
    <div className = "qHeader__icons">
                <div className = "qHeader__icon">
                    <HomeIcon/>
                </div>

                <div className = "qHeader__icon">
                    <FeaturedPlayListOutlinedIcon/>
                </div>

                <div className = "qHeader__icon">
                    <AssignmentTurnedInOutlinedIcon />
                </div>

                <div className = "qHeader__icon">
                    <PeopleAltOutlinedIcon />
                </div>

                <div className = "qHeader__icon">
                    <NotificationsOutlinedIcon/>
                </div>

                <div className = "qHearder__input">
                    <SearchIcon />
                    <input type = "text" placeholder = "Search Gamification"/>
                </div>
                </div>
                <div className = "qHeader__Rem">
                    <div className = "gHeader__avatar">
                        <Avatar/>
                        </div>  
                        <Button class= "qHeader__Rem" >Add Question</Button>
                </div> 
                    </div>
    );
}

export default Navbar;