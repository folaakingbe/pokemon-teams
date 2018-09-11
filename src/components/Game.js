import React from "react";

const Game = (props) => (
    <div style={props.style}>
        <h1>{props.name}</h1>
        <h2>{props.trainer}</h2>
        <h2>{props.ID}</h2>
        <h2>{props.team}</h2>
    </div>
);

export default Game;