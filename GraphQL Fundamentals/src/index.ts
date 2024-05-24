import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

// server setup
const server = new ApolloServer({
    // typeDefs -- definitions of types of data game(title, price, genre)
    typeDefs,
    // resolvers -- functions that handle any incoming requests and return data
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)