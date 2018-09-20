import React from "react";

const Game = (props) => {
    console.log(props.team.length);
    return <div style={props.style}>
        <h1>{props.name}</h1>
        <h2>Name: {props.trainer}</h2>
        <h2>ID: {props.ID}</h2>
        <h2>Team: {props.team.join(' ')}</h2>
    </div>;
};

export default Game;