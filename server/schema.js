const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Hardcoded Data

const blaziken = {name: 'Blaziken', nickname: 'Ken', gender: 'male', type1: 'Fire', type2: 'Fighting', nature: 'Docile', pokeball: 'Poke Ball'}; 
const groudon = {name: 'Groudon', nickname: 'Behemoth', gender: 'genderless', type1: 'Ground', type2: null, nature: 'Bold', pokeball: 'Ultra Ball'};
const regice = {name: 'Regice', nickname: 'Sub-Zero', gender: 'genderless', type1: 'Ice', type2: null, nature: 'Jolly', pokeball: 'Ultra Ball'};
const mightyena = {name: 'Mightyena', nickname: 'Scavenger', gender: 'male', type1: 'Dark', type2: null, nature: 'Adamant', pokeball: 'Poke Ball'};
// const magneton = {name: , nickname: , gender: , type1: , type2: , nature: , pokeball: };
// const = {name: , nickname: , gender: , type1: , type2: , nature: , pokeball: };
const espeon = {name: 'Espeon', nickname: 'Apollo', gender: 'male', type1: 'Psychic', type2: null, nature: 'Lonely', pokeball: 'Poke Ball'};
const jumpluff = {name: 'Jumpluff', nickname: 'Lionel', gender: 'male', type1: 'Grass', type2: 'Flying', nature: 'Mild', pokeball: 'Great Ball'};
const hariyama = {name: 'Hariyama', nickname: 'Tohru', gender: 'male', type1: 'Fighting', type2: null, nature: 'Modest', pokeball: 'Poke Ball'};
// const = {name: , nickname: , gender: , type1: , type2: , nature: , pokeball: };
// const = {name: , nickname: , gender: , type1: , type2: , nature: , pokeball: };
// const = {name: , nickname: , gender: , type1: , type2: , nature: , pokeball: };
// const = {name: , nickname: , gender: , type1: , type2: , nature: , pokeball: };

const team1 = [blaziken, groudon, regice, mightyena];
const team2 = [espeon, jumpluff, hariyama];

const games = [
    {id:'1', title:'Ruby', name:'Brendan', number:65530, team:team1},
    {id:'2', title:'Colosseum', name:'Wes', number:17041, team:team2}
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
        number: {type: GraphQLInt},
        team: {type: new GraphQLList(PokemonType)}
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