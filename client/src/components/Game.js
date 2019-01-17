import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
            <div>
                <h1 className="display-4 my-3">Games</h1>
                <Query query={GAMES_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            console.log(data);

                            return <h1>Test</h1>;
                        }
                    }
                </Query>

            </div>
        )
    }
}

export default Game