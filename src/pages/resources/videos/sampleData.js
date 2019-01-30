import faker from 'faker'

export default Array.from({ length: 10 }, () => ({
  title: faker.lorem.words(faker.random.number(3) + 3),
  date: '9/12/2018',
  id: faker.random.uuid(),
  location: faker.address.city(),
  company: faker.company.companyName(),
  count: faker.random.number(300) + 50,
}))
