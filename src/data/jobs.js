import faker from 'faker'
import { FaRegKeyboard } from 'react-icons/fa'

export default Array.from({ length: 10 }, () => ({
  title: faker.lorem.words(faker.random.number(3) + 3),
  desc: faker.lorem.paragraph(faker.random.number(1) + 1),
  from: faker.random.number(20) + 1,
  id: faker.random.uuid(),
  location: faker.address.city(),
  company: faker.company.companyName(),
  type: ['Full-time', 'Part-time', 'Remote'][faker.random.number(2)],
  isOpened: faker.random.boolean(),
}))
