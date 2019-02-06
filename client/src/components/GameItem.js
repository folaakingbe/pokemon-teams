import React from 'react'

export default function GameItem({game: { title, name, number}, team}) {
    console.log(team);
    var team_members = [];
    if (team !== null) {
        team_members = team.map(members => members.name);
    }
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Game: {title}</h4>
                    <p>Name: {name}</p>
                    <p>ID Number: {number}</p>
                    <p>{team_members.join(" ")}</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Team Details</button>
                </div>
            </div>
        </div>
    );
}