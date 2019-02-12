const { ApolloServer, gql } = require('apollo-server');
const { find, filter }  = require('lodash');
const uuidv4 = require('uuid/v4');
const fs = require('fs');

const typeDefs = gql(fs.readFileSync(__dirname.concat('/src/schema.graphql'), 'utf8'))
let {users, notes, groups}  = require('./src/mockData');


// Resolvers define the technique for fetching the types in the schema.
const resolvers = {
  Query: {
    getGroups: () => {
      let _groups = [];
      for (let group of groups) {
        let _users = [];
        for (let userId of group.userIds) {
          _users.push(find(users, { id: userId }));
        }
        let _notes = [];
        for (let noteId of group.noteIds) {
          _notes.push(find(notes, { id: noteId }));
        }
        _groups.push({
          id: group.id,
          users: _users,
          notes: _notes,
        });
      }
      return _groups;
    },
    getUsers: () => users,
    getUser: (_, { id }) => find(users, { id }),
    getNotes: () => notes,
    getNote: (_, { id }) => find(notes, { id }),
  },
  Mutation: {
    addNote: (_, { userId, groupId, data }) => {
      let id = uuidv4();
      let note = {
        id,
        userId, groupId, data
      };
      notes.push(note);
      for (let group of groups) {
        if (group.id === groupId) {
          group.noteIds.push(id); // ToDo: check that user is in this group
        }
      }
      return note;
    },
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`GraphQL Server ready at ${url}`);
});
