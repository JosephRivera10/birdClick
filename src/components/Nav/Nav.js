import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Bird Clicky Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "#3abfc5"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Nav;