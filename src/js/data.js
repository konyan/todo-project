const data = [
  {
    name: 'Daily Schedule',
    todos: [
      {
        title: 'Wake Up',
        description: 'Wake Up Morning',
        dueDate: '2020-01-02',
        status: false,
        priority: 1,
      },
      {
        title: 'Wake Up',
        description: 'Wake Up Morning',
        dueDate: '2020-01-20',
        status: true,
        priority: 3,
      },
      {
        title: 'Wake Up',
        description: 'Wake Up Morning',
        dueDate: '2020-02-20',
        status: false,
        priority: 2,
      },
    ],
  },
  {
    name: 'Work Schedule',
    todos: [
      {
        title: 'Wake Up',
        description: 'Wake Up Morning',
        dueDate: '2020-03-20',
        status: false,
        priority: 1,
      },
    ],
  },
];

export const initDB = () => {
  if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify(data));
  }
};

export const storeData = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

export const getStoreData = () => JSON.parse(localStorage.getItem('data'));
