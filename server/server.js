const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
require('dotenv').config();

// Initialize the Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Initialize an Express application
const app = express();

// Apply middleware
app.use(cors({ origin: true, credentials: true }));

// Define the port
const port = process.env.PORT || 8000;

// Function to start the Apollo Server and Express app
const startApolloServer = async () => {
  // Start the Apollo server
  await server.start();

  // Apply the Apollo GraphQL middleware and set the path to /graphql
  server.applyMiddleware({ app, path: '/graphql' });

  // Express middleware for parsing requests
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  // Listen to the database connection and start the Express server
  db.once('open', () => {
    app.listen(port, () => {
      console.log(`API server running on port ${port}!`);
      console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
    });
  });
};

// Call the function to start the server
startApolloServer();