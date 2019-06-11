const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const typeDefs = `
type Query{
    hello(name: String): String!
}

type Person {
    name: String
    height: String
}`;
