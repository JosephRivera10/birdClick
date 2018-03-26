import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectBird(props.breed)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default BirdCard;