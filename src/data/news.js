import faker from 'faker'
import { FaRegKeyboard } from 'react-icons/fa'

export default Array.from({ length: 10 }, () => ({
  title: faker.lorem.words(faker.random.number(3) + 3),
  excerpt: faker.lorem.paragraph(faker.random.number(3) + 2),
  author: faker.name.firstName(),
  id: faker.random.uuid(),
  date: faker.date.month({ abbr: true }) + ' ' + (faker.random.number(28) + 1),
}))
