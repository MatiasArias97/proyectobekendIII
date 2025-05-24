import { Router } from 'express';
import { generateMockUsers } from '../utils/generateMockUsers.js';
import { generateMockPets } from '../utils/generateMockPets.js';
import { UserModel } from '../dao/models/user.model.js';
import  PetModel  from '../dao/models/pet.model.js';

const router = Router();

// GET /mockingpets - solo genera en memoria
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(100);
  res.json(pets);
});

// GET /mockingusers - solo genera en memoria
router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json(users);
});

// POST /generateData - genera y guarda en MongoDB
router.post('/generateData', async (req, res) => {
  const { users: userCount = 0, pets: petCount = 0 } = req.body;

  try {
    const users = generateMockUsers(userCount);
    const pets = generateMockPets(petCount);

    await UserModel.insertMany(users);
    await PetModel.insertMany(pets);

    res.json({ status: 'success', insertedUsers: userCount, insertedPets: petCount });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

export default router;