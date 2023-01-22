import React from "react";

export default function Card(props) {
    return (
        <div className="card" onClick={props.shuffle}>
            {props.theCard.title}
        </div>
    )
}