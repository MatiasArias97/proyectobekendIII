import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export function generateMockUsers(count = 1) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const passwordHash = bcrypt.hashSync('coder123', 10);
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email({ provider: 'example.com' }).toLowerCase(),
      password: passwordHash,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }

  return users;
}