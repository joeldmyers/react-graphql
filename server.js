const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

// graphQL
app.use('/graphql', expressGraphQL({
  // need to specify schema
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Running');
});