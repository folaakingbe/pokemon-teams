const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

// use yarn run dev:server to start graphql
// go to localhost:4000/graphql in browser
// use yarn json:server to start json server on port 3001
app.listen(4000, () => {
    console.log('Server is running on port 4000..')
});