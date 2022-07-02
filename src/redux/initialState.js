const initialState = {
  columns: [
    {
      id: '1',
      title: 'Books',
      icon: 'book',
      listId: '1',
    },
    {
      id: '2',
      title: 'Movies',
      icon: 'film',
      listId: '1',
    },
    {
      id: '3',
      title: 'Games',
      icon: 'gamepad',
      listId: '1',
    },
    {
      id: '4',
      title: 'Test',
      icon: 'html',
      listId: '2',
    }
  ],

  cards: [
    { id: '1', columnId: '1', title: 'This is Going to Hurt' },
    { id: '2', columnId: '1', title: 'Interpreter of Maladies' },
    { id: '3', columnId: '2', title: 'Harry Potter' },
    { id: '4', columnId: '2', title: 'Star Wars' },
    { id: '5', columnId: '3', title: 'The Witcher' },
    { id: '6', columnId: '3', title: 'Skyrim' },
    { id: '7', columnId: '4', title: 'Sport' },
    { id: '8', columnId: '4', title: 'Computers' },

  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      subtitle: 'soon!',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
   }
 ],

  searchString: {
    searchKey: '',
  },
};

export default initialState;