const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Hardcoded Data

const games = [
    {id:'1', title:'Ruby', name:'Brendan', number:65530},
    {id:'2', title:'Colosseum', name:'Wes', number:17041}
];

// Pokemon Type
const PokemonType = new GraphQLObjectType({
    name: 'Pokemon',
    fields:() => ({
        name: {type: GraphQLString},
        nickname: {type: GraphQLString},
        gender: {type: GraphQLString},
        type1: {type: GraphQLString},
        type2: {type: GraphQLString},
        nature: {type: GraphQLString},
        pokeball: {type: GraphQLString}
    })
});

// Game Type
const GameType = new GraphQLObjectType({
    name: 'Game',
    fields:() => ({
        id: {type:GraphQLString},
        title: {type: GraphQLString},
        name: {type: GraphQLString},
        number: {type: GraphQLInt}
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        game: {
            type: GameType,
            args:{
                id:{type: GraphQLString}
            },
            resolve(parentValue, args){
                for (let i = 0; i < games.length; i++){
                    if (games[i].id == args.id) {
                        return games[i];
                    }
                }
            }
        },
        // Getting all objects. Don't need args for this
        games: {
            type: new GraphQLList(GameType),
            resolve(parentValue, args){
                return games;
            }
        }
    }
    
})

module.exports = new GraphQLSchema({
    query:RootQuery
});