import { faker } from '@faker-js/faker';

export function generateMockPets(count = 1) {
  const pets = [];

  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.person.firstName(), // nombre de la mascota (genérico)
      species: faker.animal.type() // tipo de animal (por ejemplo: dog, cat, etc.)
    });
  }

  return pets;
}