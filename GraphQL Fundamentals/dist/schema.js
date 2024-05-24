// 5 different data types: int, float, string, boolean, ID
// 3 types: game, reviews, author
// `#graphql`: enables syntax highlighting
export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
        game: Game!,
        author: Author!
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!
        reviews: [Review!]
    }
    # Every schema needs "type Query" - it defines our entry points to the graph and specifies the return type
    type Query {
        games: [Game] # this gets all games
        reviews: [Review] # gets all reviews
        authors: [Author]
        review(id: ID!): Review # get singular review
        game(id: ID!): Game
        author(id: ID!): Author
    }
    # Mutations - Responsible for manipulating data in db
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, updates: UpdateGameInput!): Game
    }

    input AddGameInput {
        title: String!,
        platform: [String!]!
    }

    input UpdateGameInput {
        title: String!,
        platform: [String!]
    }
`;
