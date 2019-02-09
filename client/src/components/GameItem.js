import React from 'react';
import { Link } from 'react-router-dom';

export default function GameItem({game: { id, title, name, number}, team}) {
    console.log(team);
    // Make an array of team members
    var team_members = [];
    if (team !== null) {
        team_members = team.map(members => members.name);
    }
    return (
        // Use state object to send id to Game component
        <div className="card card-body mb-3" style={{backgroundColor: 'white'}}>
            <div className="row">
                <div className="col-md-9">
                    <h4>Game: {title}</h4>
                    <p>Name: {name}</p>
                    <p>ID Number: {number}</p>
                    <p>{team_members.join(" ")}</p>
                </div>
                <div className="col-md-3">
                    <Link to={{pathname: `/game/${title}`, state: {id: id}}} className="btn btn-secondary">Team Details</Link>
                </div>
            </div>
        </div>
    );
}