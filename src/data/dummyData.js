const dummyData = [
    {
      id: 1,
      boardTitle: 'Project Management',
      lists: [
        { id: 101, title: 'To Do', tasks: [{ id: 1001, title: 'Task 1' }, { id: 1002, title: 'Task 2' }] },
        { id: 102, title: 'In Progress', tasks: [{ id: 1003, title: 'Task 3' }] },
        { id: 103, title: 'Done', tasks: [{ id: 1004, title: 'Task 4' }, { id: 1005, title: 'Task 5' }] }
      ]
    },
    {
      id: 2,
      boardTitle: 'Personal Tasks',
      lists: [
        { id: 201, title: 'Pending', tasks: [{ id: 2001, title: 'Buy groceries' }, { id: 2002, title: 'Read book' }] },
        { id: 202, title: 'Completed', tasks: [{ id: 2003, title: 'Exercise' }, { id: 2004, title: 'Cook dinner' }] }
      ]
    }
  ];
  
  export default dummyData;
  