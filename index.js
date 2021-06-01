const {ApolloServer} = require('apollo-server'); 
const gql = require('graphql-tag'); "26.3k (gzipped: 7.8k)"
const mongoose = require('mongoose'); 
const {MONGODB} = require('./config.js');
const Post = require('./moduls/Post');

 const typeDefs = gql`
 type Post {
     id: ID!
     body: String!
     createdAt:String!
     userName: String!

 }
 type Query {
     getPosts :[Post]
 }
`;
const resolvers = {
  Query : {
      async getPosts() {
          try {
              const post = await Post.find();
              return post
         } catch(error){
            throw new Error(err);

        }
          
      }

    }
 
}
// the server of apolloserver
const server = new ApolloServer ({
    typeDefs,
    resolvers
});
// connect to the MongoDB, will use the password and the cluster
mongoose.connect(MONGODB,{useNewUrlParser: true})
// the lister to resquest the server
.then( ()=> { return server.listen({port:5000});
})
// the resquest of the server in the URL
.then(res => {
    console.log(`Server running at ${res.url}`);
}) 


//running in the 5000 the browser
server.listen({port:5000})
.then(res => {
    console.log(`server running at ${res.url}`)
})


