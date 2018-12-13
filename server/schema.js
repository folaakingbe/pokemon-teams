const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Hardcoded Data

/*
const blaziken = {name: 'Blaziken', nickname: 'Ken', gender: 'male', type1: 'Fire', type2: 'Fighting', nature: 'Docile', pokeball: 'Poke Ball'}; 
const groudon = {name: 'Groudon', nickname: 'Behemoth', gender: 'genderless', type1: 'Ground', type2: null, nature: 'Bold', pokeball: 'Ultra Ball'};
const regice = {name: 'Regice', nickname: 'Sub-Zero', gender: 'genderless', type1: 'Ice', type2: null, nature: 'Jolly', pokeball: 'Ultra Ball'};
const mightyena = {name: 'Mightyena', nickname: 'Scavenger', gender: 'male', type1: 'Dark', type2: null, nature: 'Adamant', pokeball: 'Poke Ball'};
const magneton = {name: 'Magneton', nickname: 'Circuit', gender: 'genderless', type1: 'Electric', type2: 'Steel', nature: 'Quiet', pokeball: 'Nest Ball'};
const wailord = {name: 'Wailord', nickname: 'Colossus', gender: 'female', type1: 'Water', type2: null, nature: 'Lonely', pokeball: 'Ultra Ball'};
const espeon = {name: 'Espeon', nickname: 'Apollo', gender: 'male', type1: 'Psychic', type2: null, nature: 'Lonely', pokeball: 'Poke Ball'};
const jumpluff = {name: 'Jumpluff', nickname: 'Lionel', gender: 'male', type1: 'Grass', type2: 'Flying', nature: 'Mild', pokeball: 'Great Ball'};
const hariyama = {name: 'Hariyama', nickname: 'Tohru', gender: 'male', type1: 'Fighting', type2: null, nature: 'Modest', pokeball: 'Poke Ball'};
const entei = {name: 'Entei', nickname: 'Phyre', gender: 'genderless', type1: 'Fire', type2: null, nature: 'Impish', pokeball: 'Ultra Ball'};
const suicune = {name: 'Suicune', nickname: 'Suijin', gender: 'genderless', type1: 'Water', type2: null, nature: 'Rash', pokeball: 'Net Ball'};
const raikou = {name: 'Raikou', nickname: 'Thor', gender: 'genderless', type1: 'Electric', type2: null, nature: 'Impish', pokeball: 'Ultra Ball'};
const umbreon = {name: 'Umbreon', nickname: 'Artemis', gender: 'male', type1: 'Dark', type2: null, nature: 'Hasty', pokeball: 'Poke Ball'};

const team1 = [blaziken, groudon, regice, mightyena, magneton, wailord];
const team2 = [espeon, jumpluff, hariyama, entei, suicune, raikou, umbreon];

const games = [
    {id:'1', title:'Ruby', name:'Brendan', number:65530, team:team1},
    {id:'2', title:'Colosseum', name:'Wes', number:17041, team:team2}
];
*/

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
                /*
                for (let i = 0; i < games.length; i++){
                    if (games[i].id == args.id) {
                        return games[i];
                    }
                }
                */
                // Making a request using axios to json server and returning it through graphql
                // returns a promise
                // res is a data object so needs to map res to res.data
                return axios.get('http://localhost:3001/games/' + args.id)
                    .then(res => res.data); 
            }
        },
        // Getting all objects. Don't need args for this
        games: {
            type: new GraphQLList(GameType),
            resolve(parentValue, args){
                // return games;
                return axios.get('http://localhost:3001/games')
                    .then(res => res.data);
            }
        }
    }
    
})

module.exports = new GraphQLSchema({
    query:RootQuery
});