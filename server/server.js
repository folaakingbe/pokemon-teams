const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema.js');

const app = express();

// Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

// use yarn run dev:server to start graphql
// go to localhost:4000/graphql in browser
// use yarn json:server to start json server on port 3001
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`)
});

// erased "build", "test", and "eject" for now
// "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test --env=jsdom",
//     "eject": "react-scripts eject",
//     "dev:server": "nodemon ./server/server.js",
//     "json:server": "json-server --watch data.json --port 3001"
//   }