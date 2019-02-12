# GraphQL sample

This is a trivial GraphQL server with mock data.

## Getting Started
1. Clone the repository
2. Run `npm install` in the root of the repository
3. Run `npm start` to start the server
4. Browse to `http://localhost:4000/`

## Sample queries
Get groups
```
{
  getGroups {
    id
    users {
      name
    }
    notes {
      data
    }
  }
}
```

Add a note
```
mutation{
  addNote(
    userId:1,
    groupId:1,
    data:"test note"
  ) {
    id, userId, groupId, data
  }
}
```

After adding a note, the getGroups query above reflects the additional note.
