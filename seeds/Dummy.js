import { address, date, internet, lorem, name, random } from 'faker'

const dummies = []
const tags = ['Developer', 'Designer', 'Writer', 'Composer']
const colors = ['blue', 'red', 'pink', 'green']

function getRandomEntries(array, min, max) {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, random.number({ min, max }))
}

for (let i = 0; i < 55; i++) {
  const number = `${i + 1}`.padStart(2, '0')
  const messages = []
  const amount = random.number({ min: 0, max: 10 })
  for (let j = 0; j < amount; j++) {
    messages.push({ text: lorem.sentence() })
  }
  dummies.push({
    firstName: name.firstName(),
    lastName: `${number} ${name.firstName()}`,
    prefix: name.prefix().toLowerCase().replace(/\./g, ''),
    country: address.countryCode(),
    dateOfBirth: date.past(100),
    email: internet.email(),
    tags: getRandomEntries(tags, 1, 3),
    age: random.number({ min: 10, max: 100 }),
    factor: +(Math.random() + 0.5).toFixed(2),
    colors: getRandomEntries(colors, 1, 4),
    verified: random.boolean(),
    comments: lorem.sentence(),
    messages
  })
}

export default dummies
