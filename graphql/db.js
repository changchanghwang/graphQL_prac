export const people = [
  {
    id: '0',
    name: 'Hwang',
    age: 27,
    gender: 'male',
  },
  {
    id: '1',
    name: 'chang',
    age: 32,
    gender: 'male',
  },
  {
    id: '2',
    name: 'gwa',
    age: 4,
    gender: 'male',
  },
  {
    id: '3',
    name: 'hwan',
    age: 33,
    gender: 'male',
  },
  {
    id: '4',
    name: 'q',
    age: 12,
    gender: 'male',
  },
  {
    id: '5',
    name: 'agw',
    age: 34,
    gender: 'male',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => String(id) === person.id);
  return filteredPeople[0];
};
