import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon'

const GAME_QUERY = gql`
query GameQuery($id: String!) {
    game(id: $id) {
        id
        title
        name
        number
        team {
            name
            nickname
            gender
            type1
            type2
            nature
            pokeball
        }
    }
}
`;

export class Game extends Component {
    render() {
        console.log(this.props.location.state);
        let { id } = this.props.location.state;
        return (
            <Fragment>
                <Query query={GAME_QUERY} variables={{id}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        console.log(data);

                        const {
                            id,
                            title,
                            name,
                            number,
                            team
                        } = data.game;

                        // var team_members = [];
                        // if (team !== null) {
                        //     team_members = team.map(members => members.name);
                        // }

                        if (team != null) {
                        return (
                            // <div className="card card-body mb-3" style={{backgroundColor: 'black'}}>
                            //     <p>{team_members.join(" ")}</p>
                            // </div>
                            <Fragment>
                                {team.map(pokemon => (
                                    <Pokemon key={pokemon.name} pokemon={pokemon} />
                                ))}
                            </Fragment>
                        );
                        }
                        else {
                            return <h2 style={{color: 'red'}}>No Team Given</h2>;
                        }
                    }
                }
                </Query>
            </Fragment>
        )
    }
}

export default Game;