// Mock data
let users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Steve Smith'
  },
  {
    id: 3,
    name: 'Jane Doe'
  },
  {
    id: 4,
    name: 'Sally Smith'
  }
];

let notes = [
  {
    id: '1',
    userId: 1,
    groupId: 1,
    data: 'This is first note (group 1)'
  },
  {
    id: '2',
    userId: 2,
    groupId: 1,
    data: 'This is 2nd note (group 1)'
  },
  {
    id: '3',
    userId: 3,
    groupId: 2,
    data: 'This is first note (group 2)'
  },
  {
    id: '4',
    userId: 4,
    groupId: 2,
    data: 'This is 2nd note (group 2)'
  }
]

let groups = [
  {
    id: 1,
    userIds: [1, 2],
    noteIds: ['1', '2'],
  },
  {
    id: 2,
    userIds: [3, 4],
    noteIds: ['3', '4'],
  },
];

module.exports = {users, notes, groups};
