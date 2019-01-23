import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import GameItem from './GameItem';

const GAMES_QUERY = gql`
query GamesQuery {
    games{
        id
        title
        name
        number
    }
}
`;

export class Game extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">Games</h1>
                <Query query={GAMES_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            console.log(data);

                            // return <h1>test</h1>
                            return (
                                <Fragment>
                                    {data.games.map(game => (
                                        <GameItem key={game.id} game={game} />
                                    ))}
                                </Fragment>
                            );
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Game