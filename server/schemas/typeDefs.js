const typeDefs = `
scalar Date

type User {
    _id: ID!,
    username: String!,
    email: String!,
    password: String!,
    profilePicUrl: String,
    createdAt: String!
}

type Product {
    _id: ID!,
    name: String!,
    description: String!,
    price: Float!,
    quantity: Int!,
    category: String!,
    imageUrl: String,
    seller: User!,
    createdAt: String!
}

type Transaction {
    _id: ID!,
    buyer: User!,
    product: Product!,
    transactionDate: String!,
    status: String!,
    amount: Int!
}

type Query {
    users: [User],
    products: [Product],
    transactions: [Transaction]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addProduct(name: String!, description: String!, price: Float!, quantity: Int!, category: String!, imageUrl: String, sellerId: ID!): Product
    addTransaction(buyerId: ID!, productId: ID!, transactionDate: Date!, status: String!, amount: Int!): Transaction
}
`;

module.exports = typeDefs;