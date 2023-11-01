import { faker } from '@faker-js/faker';

function generateTableData() {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    address: faker.location.city(),
    phone_number: faker.phone.number(),
  };
}

export const tableData = faker.helpers.multiple(generateTableData, {
  count: 20,
});

function generateListData() {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  };
}

export const listData = faker.helpers.multiple(generateListData, {
  count: 20,
});

export const chartData = [
  { name: 'London', calculate: 59 },
  { name: 'Paris', calculate: 57 },
  { name: 'New-York', calculate: 86 },
  { name: 'Seoul', calculate: 21 },
  { month: 'Jan' },

  { name: 'London', calculate: 57 },
  { name: 'Paris', calculate: 51 },
  { name: 'New-York', calculate: 77 },
  { name: 'Seoul', calculate: 40 },
  { month: 'Feb' },

  { name: 'London', calculate: 47 },
  { name: 'Paris', calculate: 61 },
  { name: 'New-York', calculate: 106 },
  { name: 'Seoul', calculate: 49 },
  { month: 'Mar' },

  { name: 'London', calculate: 87 },
  { name: 'Paris', calculate: 90 },
  { name: 'New-York', calculate: 96 },
  { name: 'Seoul', calculate: 100 },
  { month: 'Apr' },

  { name: 'London', calculate: 30 },
  { name: 'Paris', calculate: 51 },
  { name: 'New-York', calculate: 70 },
  { name: 'Seoul', calculate: 80 },
  { month: 'May' },

  { name: 'London', calculate: 67 },
  { name: 'Paris', calculate: 59 },
  { name: 'New-York', calculate: 74 },
  { name: 'Seoul', calculate: 150 },
  { month: 'Jun' },
  { year: 2023 },
];
