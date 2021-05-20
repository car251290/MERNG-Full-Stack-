const {ApolloServer} = require('apollo-server'); 
 const gql = require('graphql-tag'); "26.3k (gzipped: 7.8k)"
 const mongoose = require('mongoose'); 
const {MONGODB} = require('./config.js');
 const typeDefs = gql`

 type Query {
     sayHi : String!

 }
`

const resolvers = {
  Query : {
      sayHi:() => 'HelloWord'

}
 
}
// the server of apolloserver
const server = new ApolloServer ({
    typeDefs,
    resolvers
});
// connect to the MongoDB, will use the password and the cluster
mongoose
.connect(MONGODB,{useNewUrlParser: true})
.then(()=> {
    console.log("MongoDB connected");
    return server.listen({port:5000});
})
.then(res => {
    console.log(`Server running at ${res.url}`);
}) 

//running in the 5000 the browser
server.listen({port:5000})
.then(res => {
    console.log(`server running at ${res.url}`)
})
