import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

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

                        return <h1>Test</h1>;
                    }
                }
                </Query>
            </Fragment>
        )
    }
}

export default Game;