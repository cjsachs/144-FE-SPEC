// import db
import db from "./db.js";

// resolvers
export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        }
    },
    // Nested Resolvers
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },
    Review: {
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
        },
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        }
    },
    Mutation: {
        addGame(_, args) {
            // create new game instance
            let game = {
                ...args.game,
                id: Date.now()
            }
            // add game to games list
            db.games.push(game)

            return game
        },
        deleteGame(_, args) {
            db.games = db.games.filter((game) => args.id !== game.id)
            return db.games
        },
        updateGame(_, args) {
            // find existing game based off id
            db.games = db.games.map((game) => {
                if (game.id === args.id) {
                    game = {...game, ...args.updates }
                    return game
                }
                return game
            })
            return db.games.find((game) => game.id === args.id)
        }
    }
}